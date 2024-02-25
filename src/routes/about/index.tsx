import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik'
import Avatar from '~/components/avatar/avatar'
import { baseMeta } from '~/const/seo'
import { css } from '~/styled-system/css'

const iconSize = 24

const sns = {
	github: { href: 'https://github.com/rerelurelu' },
	zenn: { href: 'https://zenn.dev/astrologian' },
} as const

const intro = {
	para1: 'フロントエンドエンジニア（仮）',
} as const

export default component$(() => {
	return (
		<div class={container}>
			<Avatar height={512} width={512} />
			<span class={myName}>relu</span>
			<ul class={iconContainer}>
				<li>
					<Link class={snsLink} href={sns.github.href} target='_blank'>
						<Image
							alt={'Link to GitHub'}
							height={iconSize}
							src={'/icons/github-logo.svg'}
							width={iconSize}
						/>
					</Link>
				</li>
				<li>
					<Link class={snsLink} href={sns.zenn.href} target='_blank'>
						<Image
							alt={'Link to Zenn'}
							height={iconSize}
							src={'/icons/zenn-logo.svg'}
							width={iconSize}
						/>
					</Link>
				</li>
			</ul>
			<div class={introContainer}>
				<p>{intro.para1}</p>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'About | Relu',
	meta: [
		...baseMeta,
		{
			name: 'description',
			content: 'About Relu',
		},
		{
			property: 'og:title',
			content: 'About | Relu',
		},
		{
			property: 'og:description',
			content: 'About Relu',
		},
	],
}

const container = css({
	display: 'grid',
	placeItems: 'center',
	mt: { base: '8rem', md: '9rem' },
	px: '1.5rem',
})

const myName = css({
	fontSize: '2.25rem',
	lineHeight: '2.5rem',
	mt: '2.5rem',
})

const iconContainer = css({
	mt: '1.5rem',
	display: 'flex',
	flexWrap: 'wrap',
	gap: '1rem',
	listStyle: 'none',
})

const snsLink = css({
	textDecoration: 'underline',
	_hover: {
		opacity: '0.7',
	},
})

const introContainer = css({
	mt: '5rem',
	display: 'grid',
	w: '100%',
	maxW: '56rem',
	placeItems: 'center',
	lineHeight: '1.5rem',
})
