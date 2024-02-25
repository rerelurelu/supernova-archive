import { component$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import { ENTRIES } from '~/const/entries'
import { css, cva } from '~/styled-system/css'
import { getPathname } from '~/utils/getPathname'

export default component$(() => {
	const loc = useLocation()
	const pathname = getPathname(loc.url.pathname)

	return (
		<header class={header}>
			<ul class={ul}>
				{ENTRIES.map(({ href, content }) => {
					return (
						<li key={content}>
							<Link class={link} href={href} id={content}>
								<span
									class={gradationRecipe(content === pathname ? { visual: 'active' } : undefined)}
								>
									{content}
								</span>
							</Link>
						</li>
					)
				})}
			</ul>
		</header>
	)
})

const header = css({
	w: '100%',
	alignItems: 'center',
	h: '4rem',
	top: '0',
	left: '0',
	right: '0',
	pt: '1rem',
	px: { base: '0', md: '3rem' },
	zIndex: '50',
	display: 'flex',
	justifyContent: { base: 'center', md: 'end' },
	bg: 'bgHeader',
	pos: 'fixed',
	backdropFilter: 'blur(8px)',
})

const ul = css({
	w: 'max-content',
	display: 'inline-flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	listStyle: 'none',
	m: '0',
	p: '0',
})

const link = css({
	bg: { _hover: 'transparent', _focus: 'transparent' },
	gap: '0.75rem',
	p: '0.75rem 1rem',
	color: { base: 'white' },
	alignItems: 'center',
	userSelect: 'none',
})

const gradationRecipe = cva({
	base: {
		fontSize: { md: 'large' },
		fontWeight: '600',
		textTransform: 'capitalize',
		letterSpacing: '0.1em',
		fontSmoothing: 'antialiased',
		bg: { _hover: 'activePage' },
		backgroundClip: { _hover: 'text' },
		WebkitTextFillColor: { _hover: 'transparent' },
	},
	variants: {
		visual: {
			active: {
				bg: 'activePage',
				backgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
			},
		},
	},
})
