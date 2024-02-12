import { component$ } from '@builder.io/qwik'
import { css } from '~/styled-system/css'

type Props = {
  title: string
}

export default component$(({ title }: Props) => {
  return (
    <>
      <header class={header}>
        <h1 class={contentsTitle}>{title}</h1>
      </header>
    </>
  )
})

const header = css({
  m: { base: '8rem auto 0', md: '10rem auto 0' },
})

const contentsTitle = css({
  color: 'contentsTitle',
  textAlign: 'center',
  fontSize: '2.25rem',
  lineHeight: '2.5rem',
  fontWeight: '400',
  letterSpacing: '0.1em',
})
