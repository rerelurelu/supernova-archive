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
    borderBottom: '0.0625rem solid #b2ebf24d',
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
    color: '#e879f9',
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
      opacity: '0.7',
      fontSize: '1rem',
    },
  },

  '& hr': {
    my: '2rem',
    h: '1px',
    border: 'none',
    bg: '#b2ebf24d',
  },

  '& p': {
    mb: '2rem',
    opacity: '0.7',
    fontSize: '1rem',

    '& code': {
      p: '0.25rem 0.5rem',
      mx: '0.25rem',
      borderRadius: '0.25rem',
      fontSmoothing: 'antialiased',
      bg: '#2b3047',
      color: '#f2f4ffcc',
    },
  },

  '& pre': {
    my: '3rem',
    p: '1rem',
    borderRadius: '0.5rem',
    bg: '#2b3047',
    color: '#f2f4ffcc',

    '& code': {
      py: '1rem',
      fontSize: '1rem',
    },
  },
});
