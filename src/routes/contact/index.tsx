/* eslint-disable qwik/valid-lexical-scope */
import { $, component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$, z } from '@builder.io/qwik-city';
import type { InitialValues, SubmitHandler } from '@modular-forms/qwik';
import { reset, useForm, zodForm$ } from '@modular-forms/qwik';
import { Toaster, toast } from '~/components/toast';
import { OG_IMAGE } from '~/const/seo';
import { css } from '~/styled-system/css';

const sendMessageType = {
  success: 'メッセージの送信に成功しました 🥳',
  error: 'メッセージの送信に失敗しました 🥲',
} as const;

const inputContentType = {
  name: { label: 'Name*', placeholder: 'Your Name' },
  email: { label: 'Email*', placeholder: 'Your Email' },
  message: { label: 'Message*', placeholder: 'Message' },
} as const;

const contactSchema = z.object({
  name: z.string().nonempty('名前は入力必須です。'),
  email: z
    .string()
    .nonempty('メールアドレスは入力必須です。')
    .email('メールアドレスを正しく入力してください。'),
  message: z.string().nonempty('メッセージは入力必須です。'),
});

type ContactForm = {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
};

export const useFormLoader = routeLoader$<InitialValues<ContactForm>>(() => ({
  name: '',
  email: '',
  message: '',
}));

export default component$(() => {
  const [contactForm, { Form, Field }] = useForm<ContactForm>({
    loader: useFormLoader(),
    validate: zodForm$(contactSchema),
  });

  const handleSubmit: SubmitHandler<ContactForm> = $(async (values: ContactForm) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('message', values.message);

    await fetch(import.meta.env.PUBLIC_VITE_FORM_ENDPOINT, {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        toast.success(sendMessageType.success, {
          style: {
            fontSize: '16px',
            border: '1px solid #0ea5e9',
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
        reset(contactForm, ['name', 'email', 'message']);
      })
      .catch(() => {
        toast.error(sendMessageType.error, {
          style: {
            fontSize: '16px',
            border: '1px solid #f43f5e',
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      });
  });

  return (
    <>
      <Toaster position={'top-center'} duration={7000} closeButton />
      <header class={header}>
        <h1 class={pageTitle}>Contact</h1>
      </header>
      <Form onSubmit$={handleSubmit}>
        <div class={formContainer}>
          <div class={fieldContainer}>
            <label class={label}>
              <span class={labelText}>{inputContentType.name.label}</span>
            </label>
            <Field name="name">
              {(field, props) => (
                <>
                  <input
                    {...props}
                    type="text"
                    value={field.value}
                    placeholder={inputContentType.name.placeholder}
                    class={input}
                  />
                  {field.error && <p class={errorText}>{field.error}</p>}
                </>
              )}
            </Field>
          </div>
          <div class={fieldContainer}>
            <label class={label}>
              <span class={labelText}>{inputContentType.email.label}</span>
            </label>
            <Field name="email">
              {(field, props) => (
                <>
                  <input
                    {...props}
                    type="email"
                    value={field.value}
                    placeholder={inputContentType.email.placeholder}
                    class={input}
                  />
                  {field.error && <p class={errorText}>{field.error}</p>}
                </>
              )}
            </Field>
          </div>
          <div class={fieldContainer}>
            <label class={label}>
              <span class={labelText}>{inputContentType.message.label}</span>
            </label>
            <Field name="message">
              {(field, props) => (
                <>
                  <textarea
                    {...props}
                    value={field.value}
                    placeholder={inputContentType.message.placeholder}
                    class={textarea}
                    rows={10}
                  />
                  {field.error && <p class={errorText}>{field.error}</p>}
                </>
              )}
            </Field>
          </div>
          <button type="button" class={button} disabled={contactForm.submitting}>
            {contactForm.submitting ? 'SENDING...' : 'SEND'}
          </button>
        </div>
      </Form>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Contact | relu',
  meta: [
    {
      name: 'description',
      content: `Contact form`,
    },
    {
      name: 'type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'Contact | relu',
    },
    {
      property: 'og:description',
      content: `Contact form`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: OG_IMAGE.IMAGE,
    },
    {
      property: 'og:image:type',
      content: OG_IMAGE.IMAGE_TYPE,
    },
    {
      property: 'og:image:width',
      content: OG_IMAGE.WIDTH,
    },
    {
      property: 'og:image:height',
      content: OG_IMAGE.HEIGHT,
    },
  ],
};

const header = css({
  m: { base: '8rem auto 0', md: '10rem auto 0' },
});

const pageTitle = css({
  color: 'white',
  fontSize: '2.25rem',
  lineHeight: '2.5rem',
  textAlign: 'center',
  fontWeight: '400',
  letterSpacing: '0.1em',
});

const formContainer = css({
  mt: '4rem',
  w: '100%',
  display: 'grid',
  placeItems: 'center',
  gap: '2.5rem',
  pb: '10rem',
});

const fieldContainer = css({
  w: '100%',
  maxW: '36rem',
  display: 'flex',
  flexDir: 'column',
});

const label = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '0.5rem 0.25rem',
  userSelect: 'none',
});

const labelText = css({
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontSmoothing: 'antialiased',
});

const input = css({
  w: '100%',
  h: '3rem',
  maxW: '36rem',
  px: '1rem',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  border: '1px solid #999eef',
  flexShrink: '1',
  borderRadius: '0.5rem',
  bg: 'bgBase',
  color: 'inherit',
  _placeholder: {
    color: '#475569',
  },
  _focus: {
    borderColor: '#7c3aed',
    outline: '2px solid #a5b4fc',
    outlineOffset: '2px',
  },
});

const textarea = css({
  maxW: '36rem',
  minH: '3rem',
  p: '0.5rem 1rem',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  border: '1px solid #999eef',
  flexShrink: 1,
  borderRadius: '0.5rem',
  bg: 'bgBase',
  color: 'inherit',
  _placeholder: {
    color: '#475569',
  },
  _focus: {
    borderColor: '#7c3aed',
    outline: '2px solid #a5b4fc',
    outlineOffset: '2px',
  },
});

const errorText = css({
  color: '#f87171',
  mt: '0.75rem',
});

const button = css({
  fontWeight: '500',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  w: '100%',
  maxW: '24rem',
  mt: '2.5rem',
  bg: { base: '#e879f9', _hover: '#22d3ee' },
  display: 'inline-flex',
  flexShrink: 0,
  cursor: 'pointer',
  userSelect: 'none',
  textAlign: 'center',
  borderColor: '#f5d0fe',
  transitionDuration: '.2s',
  transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
  borderRadius: '0.5rem',
  h: '3rem',
  minH: '3rem',
  px: '1rem',
  textTransform: 'uppercase',
  textDecorationLine: 'none',
  borderWidth: '1px',
  alignItems: 'center',
  justifyContent: 'center',
  _disabled: {
    color: 'white',
    opacity: '0.3',
    pointerEvents: 'none',
  },
});
