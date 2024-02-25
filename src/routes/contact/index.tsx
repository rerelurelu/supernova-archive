import type { QRL } from '@builder.io/qwik'
import { $, component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { routeLoader$, z } from '@builder.io/qwik-city'
import type { InitialValues } from '@modular-forms/qwik'
import { reset, useForm, zodForm$ } from '@modular-forms/qwik'
import { Toaster, toast } from 'qwik-sonner'
import ContentsTitle from '~/components/contentsTitle/contentsTitle'
import { baseMeta } from '~/const/seo'
import { css } from '~/styled-system/css'

const sendMessageType = {
	success: 'メッセージの送信に成功しました 🥳',
	error: 'メッセージの送信に失敗しました 🥲',
} as const

const inputContentType = {
	name: { label: 'Name*', placeholder: 'Your Name' },
	email: { label: 'Email*', placeholder: 'Your Email' },
	message: { label: 'Message*', placeholder: 'Message' },
} as const

const contactSchema = z.object({
	name: z.string().nonempty('名前は入力必須です。'),
	email: z
		.string()
		.nonempty('メールアドレスは入力必須です。')
		.email('メールアドレスを正しく入力してください。'),
	message: z.string().nonempty('メッセージは入力必須です。'),
})

type ContactForm = {
	name: string
	email: string
	message: string
	[key: string]: string
}

export const useFormLoader = routeLoader$<InitialValues<ContactForm>>(() => ({
	name: '',
	email: '',
	message: '',
}))

export default component$(() => {
	const [contactForm, { Form, Field }] = useForm<ContactForm>({
		loader: useFormLoader(),
		validate: zodForm$(contactSchema),
	})

	const handleSubmit: QRL<(values: ContactForm) => Promise<void>> = $(async (values) => {
		const formData = new FormData()
		formData.append('name', values.name)
		formData.append('email', values.email)
		formData.append('message', values.message)

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
				})
				reset(contactForm, ['name', 'email', 'message'])
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
				})
			})
	})

	return (
		<>
			<Toaster duration={2000} position={'top-center'} />
			<ContentsTitle title={'Contact'} />
			<Form onSubmit$={handleSubmit}>
				<div class={formContainer}>
					<div class={fieldContainer}>
						<label class={label}>
							<span class={labelText}>{inputContentType.name.label}</span>
						</label>
						<Field name='name'>
							{(field, props) => (
								<>
									<input
										{...props}
										class={input}
										placeholder={inputContentType.name.placeholder}
										type='text'
										value={field.value}
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
						<Field name='email'>
							{(field, props) => (
								<>
									<input
										{...props}
										class={input}
										placeholder={inputContentType.email.placeholder}
										type='email'
										value={field.value}
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
						<Field name='message'>
							{(field, props) => (
								<>
									<textarea
										{...props}
										class={textarea}
										placeholder={inputContentType.message.placeholder}
										rows={10}
										value={field.value}
									/>
									{field.error && <p class={errorText}>{field.error}</p>}
								</>
							)}
						</Field>
					</div>
					<button class={button} disabled={contactForm.submitting} type='submit'>
						{contactForm.submitting ? 'SENDING...' : 'SEND'}
					</button>
				</div>
			</Form>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Contact | Relu',
	meta: [
		...baseMeta,
		{
			name: 'description',
			content: 'Contact form',
		},
		{
			property: 'og:title',
			content: 'Contact | Relu',
		},
		{
			property: 'og:description',
			content: 'Contact form',
		},
	],
}

const formContainer = css({
	mt: '4rem',
	w: '100%',
	display: 'grid',
	placeItems: 'center',
	gap: '2.5rem',
})

const fieldContainer = css({
	w: '100%',
	maxW: '36rem',
	display: 'flex',
	flexDir: 'column',
})

const label = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	p: '0.5rem 0.25rem',
	userSelect: 'none',
})

const labelText = css({
	fontSize: '1rem',
	lineHeight: '1.5rem',
	fontSmoothing: 'antialiased',
})

const input = css({
	w: '100%',
	h: '3rem',
	maxW: '36rem',
	px: '1rem',
	fontSize: '1.125rem',
	lineHeight: '1.75rem',
	border: '2px solid token(colors.inputBorder)',
	flexShrink: '1',
	borderRadius: '0.5rem',
	bg: 'bgBase',
	color: 'inherit',
	_placeholder: {
		color: 'placeholder',
	},
	_focus: {
		borderColor: 'focusInputBorder',
		outline: '3px solid token(colors.focusInputOutline)',
		outlineOffset: '2px',
	},
})

const textarea = css({
	maxW: '36rem',
	minH: '3rem',
	p: '0.5rem 1rem',
	fontSize: '1.125rem',
	lineHeight: '1.75rem',
	border: '2px solid token(colors.inputBorder)',
	flexShrink: 1,
	borderRadius: '0.5rem',
	bg: 'bgBase',
	color: 'inherit',
	_placeholder: {
		color: 'placeholder',
	},
	_focus: {
		borderColor: 'focusInputBorder',
		outline: '3px solid token(colors.focusInputOutline)',
		outlineOffset: '2px',
	},
})

const errorText = css({
	color: 'error',
	mt: '0.75rem',
})

const button = css({
	fontWeight: '400',
	fontSize: '1.125rem',
	lineHeight: '1.75rem',
	color: 'contentsTitle',
	w: '70%',
	maxW: '24rem',
	mt: '2.5rem',
	bg: { base: 'btnBase', _hover: 'hoverBtn' },
	display: 'inline-flex',
	flexShrink: 0,
	cursor: 'pointer',
	userSelect: 'none',
	textAlign: 'center',
	transitionDuration: '.2s',
	transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
	borderRadius: '0.5rem',
	h: '3rem',
	minH: '3rem',
	px: '1rem',
	textTransform: 'uppercase',
	textDecorationLine: 'none',
	alignItems: 'center',
	justifyContent: 'center',
	_disabled: {
		color: 'white',
		opacity: '0.3',
		pointerEvents: 'none',
	},
})
