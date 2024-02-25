import { component$ } from '@builder.io/qwik'
import { Image } from '@unpic/qwik'
import { css } from '~/styled-system/css'

type Props = {
	width: number
	height: number
}

export default component$(({ width, height }: Props) => {
	return (
		<div class={avatar}>
			<div class={imageContainer}>
				<Image alt={`relu's avatar image`} height={height} src={'/avatar.png'} width={width} />
			</div>
		</div>
	)
})

const avatar = css({
	pos: 'relative',
	display: 'inline-flex',
})

const imageContainer = css({
	w: '12rem',
	h: '12rem',
	borderRadius: '9999px',
	overflow: 'hidden',
	boxShadow: '0 0 0 3px token(colors.avatar)',
})
