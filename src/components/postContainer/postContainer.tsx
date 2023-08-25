import { component$ } from '@builder.io/qwik';
import { css } from '~/styled-system/css';

type Props = {
  postContent: string;
};

export default component$(({ postContent }: Props) => {
  return <div class={postContainer} dangerouslySetInnerHTML={postContent}></div>;
});

const postContainer = css({
  w: '100%',
  fontWeight: '400',

  '& h1, h2, h3, h4, h5, h6': {
    mt: '4rem',
  },

  '& h1, h2': {
    mb: '0.5rem',
    py: '0.5rem',
    fontWeight: '600',
    borderBottom: '0.0625rem solid token(colors.divider)',
  },

  '& h1': {
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
  },

  '& h2': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },

  '& h3': {
    _before: {
      mr: '0.5rem',
      content: '"#"',
    },
  },

  '& h4': {
    _before: {
      mr: '0.5rem',
      content: '"##"',
    },
  },

  '& h5': {
    _before: {
      mr: '0.5rem',
      content: '"###"',
    },
  },

  '& h3, h4, h5, h6': {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    mb: '0.75rem',
    fontWeight: '400',
  },

  '& a': {
    color: 'link',
    mx: '1px',
    textDecoration: 'underline',
  },

  '& figure': {
    '& img': {
      w: '100%',
      mx: 'auto',
      my: '2rem',
      borderRadius: '0.5rem',
    },
  },

  '& ul': {
    ml: '1.75rem',
    mb: '2rem',
    listStyleType: 'disc',

    '& li': {
      mx: '0',
      fontSize: '1rem',
      color: 'postMain',
    },
  },

  '& hr': {
    my: '2rem',
    h: '1px',
    border: 'none',
    bg: 'divider',
  },

  '& p': {
    mb: '2rem',
    fontSize: '1rem',
    color: 'postMain',

    '& code': {
      p: '0.25rem 0.5rem',
      mx: '0.25rem',
      borderRadius: '0.25rem',
      fontSmoothing: 'antialiased',
      bg: 'bgCodeBlock',
      color: 'code',
    },
  },

  '& pre': {
    my: '3rem',
    p: '1rem',
    borderRadius: '0.5rem',
    bg: 'bgCodeBlock',
    color: 'code',
    overflowY: 'scroll',

    '& code': {
      py: '1rem',
      fontSize: '1rem',
    },
  },
});
