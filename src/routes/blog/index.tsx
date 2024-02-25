import { fetchPosts } from '~/api/client'
import BlogField from '~/components/blogField/blogField'
import ContentsTitle from '~/components/contentsTitle/contentsTitle'
import Pagination from '~/components/pagination/pagination'
import { PER_PAGE } from '~/utils/constants'
import { getCurrentIndex } from '~/utils/getCurrentIndex'

import { component$ } from '@builder.io/qwik'
import { routeLoader$, useLocation } from '@builder.io/qwik-city'

import type { DocumentHead, Loader } from '@builder.io/qwik-city'
import { baseMeta } from '~/const/seo'
import type { PostsData } from '~/types'

export const usePostsLoader: Loader<PostsData> = routeLoader$(async () => {
	const { posts, totalCount } = await fetchPosts({ limit: PER_PAGE, offset: 0 })
	return { posts, totalCount }
})

export default component$(() => {
	const loc = useLocation()
	const currentIndex = getCurrentIndex(loc.url.pathname)
	const data = usePostsLoader()
	const totalCount = data.value.totalCount
	const needPagination = totalCount > PER_PAGE

	return (
		<>
			<ContentsTitle title={'Blog'} />
			<BlogField posts={data.value.posts} />
			{needPagination && <Pagination currentIndex={Number(currentIndex)} totalCount={totalCount} />}
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
