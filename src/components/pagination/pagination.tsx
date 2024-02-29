import { $, component$, useOnWindow, useStore, useVisibleTask$ } from '@builder.io/qwik'
import { useNavigate } from '@builder.io/qwik-city'
import { HiChevronLeftSolid, HiChevronRightSolid } from '@qwikest/icons/heroicons'
import { css, cva } from '~/styled-system/css'
import { PER_PAGE } from '~/utils/constants'
import { getPagination } from '~/utils/getPagination'

type Props = {
	totalCount: number
	currentIndex: number
}

export default component$(({ totalCount, currentIndex }: Props) => {
	const store = useStore({ width: 0 })
	const maxIndex = Math.ceil(totalCount / PER_PAGE)
	const nav = useNavigate()

	useVisibleTask$(() => {
		store.width = window.innerWidth
	})

	useOnWindow(
		'resize',
		$(() => {
			store.width = window.innerWidth
		}),
	)

	const isLaptop = store.width >= 1024
	const pagination = getPagination(maxIndex, currentIndex, isLaptop)

	const handlePagination = $(async (index: number) => {
		await nav(`/blogs/${index}`)
	})

	return (
		<div class={wrapper}>
			{currentIndex !== 1 && (
				<li class={iconContainer}>
					<button
						type='button'
						class={button({ visual: 'icon' })}
						onClick$={async () => await handlePagination(currentIndex - 1)}
					>
						<HiChevronLeftSolid class={icon} />
					</button>
				</li>
			)}
			{pagination.map((number) => (
				<li class={indexContainer} key={number}>
					<button
						type='button'
						class={button({ visual: currentIndex === number ? 'currentPage' : 'default' })}
						onClick$={async () => await handlePagination(number)}
					>
						{number}
					</button>
				</li>
			))}
			{currentIndex !== maxIndex && (
				<li class={iconContainer}>
					<button
						type='button'
						class={button({ visual: 'icon' })}
						onClick$={async () => await handlePagination(currentIndex + 1)}
					>
						<HiChevronRightSolid class={icon} />
					</button>
				</li>
			)}
		</div>
	)
})

const wrapper = css({
	mt: { base: '4rem', md: '6rem' },
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexWrap: 'wrap',
	gap: '0.5rem',
})

const indexContainer = css({
	w: '40px',
	h: '40px',
	lineHeight: '36px',
	display: 'grid',
	placeItems: 'center',
	textAlign: 'center',
})

const iconContainer = css({
	w: '24px',
	h: '40px',
	lineHeight: '36px',
	display: 'grid',
	placeItems: 'center',
	textAlign: 'center',
})

const icon = css({
	w: '24px',
	h: '40px',
	lineHeight: '36px',
	color: 'paginationIcon',
	_hover: {
		opacity: '0.7',
	},
})

const button = cva({
	base: {
		pt: '3px',
		w: '40px',
		cursor: 'pointer',
		color: 'white',
		borderRadius: '10px',
		textAlign: 'center',
	},
	variants: {
		visual: {
			default: { bg: 'transparent', _hover: { bg: '#ffffff1a' } },
			currentPage: { bg: '#ad5bba', _hover: { opacity: '0.7' } },
			icon: { w: '20px', h: '40px', pt: 0, bg: 'transparent', _hover: { opacity: '0.7' } },
		},
	},
})
