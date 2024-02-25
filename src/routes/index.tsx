import { fetchPosts } from '~/api/client'
import BlogField from '~/components/blogField/blogField'
import Hero from '~/components/hero/hero'
import { css } from '~/styled-system/css'

import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'

import type { DocumentHead, Loader } from '@builder.io/qwik-city'
import { baseMeta } from '~/const/seo'
import type { PostsData } from '~/types'

export const useRecentPostsLoader: Loader<PostsData> = routeLoader$(async () => {
	const { posts, totalCount } = await fetchPosts()
	return { posts, totalCount }
})

export default component$(() => {
	const data = useRecentPostsLoader()
	const recentPosts = data.value.posts.slice(0, 3)

	return (
		<>
			<div class={wrapper}>
				<Hero />
			</div>
			<BlogField posts={recentPosts} />
		</>
	)
})

export const head: DocumentHead = {
	title: 'Home | Relu',
	meta: [
		...baseMeta,
		{
			name: 'description',
			content: `'Relu's personal website'`,
		},
		{
			property: 'og:title',
			content: 'Home | Relu',
		},
		{
			property: 'og:description',
			content: `Relu's personal website`,
		},
	],
}

const wrapper = css({
	w: '100%',
	h: '100vh',
	display: 'flex',
	justifyContent: 'center',
})
