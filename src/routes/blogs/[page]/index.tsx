import { fetchPosts } from '~/api/client'
import BlogField from '~/components/blogField/blogField'
import ContentsTitle from '~/components/contentsTitle/contentsTitle'
import Pagination from '~/components/pagination/pagination'
import { PER_PAGE } from '~/utils/constants'
import { getCurrentIndex } from '~/utils/getCurrentIndex'

import { component$ } from '@builder.io/qwik'
import { routeLoader$, useLocation } from '@builder.io/qwik-city'

import type { DocumentHead } from '@builder.io/qwik-city'
import { baseMeta } from '~/const/seo'

export const usePostsLoader = routeLoader$(async ({ params }) => {
	const offset = (Number(params.page) - 1) * PER_PAGE
	const { posts, totalCount } = await fetchPosts({ limit: PER_PAGE, offset: offset })
	return { posts, totalCount }
})

export default component$(() => {
	const loc = useLocation()
	const currentIndex = Number(getCurrentIndex(loc.url.pathname))
	const data = usePostsLoader()

	return (
		<>
			<ContentsTitle title={'Blog'} />
			<BlogField posts={data.value.posts} />
			<Pagination currentIndex={currentIndex} totalCount={data.value.totalCount} />
		</>
	)
})

export const head: DocumentHead = {
	title: 'Blog | Relu',
	meta: [
		...baseMeta,
		{
			name: 'description',
			content: `Relu's blog list.`,
		},
		{
			property: 'og:title',
			content: 'Blog | Relu',
		},
		{
			property: 'og:description',
			content: `Relu's blog`,
		},
	],
}
