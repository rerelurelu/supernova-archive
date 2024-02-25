import { DocumentMeta } from '@builder.io/qwik-city'

type Opengraph = {
	IMAGE: string
	IMAGE_TYPE: string
	WIDTH: string
	HEIGHT: string
}

export const OG_IMAGE: Opengraph = {
	IMAGE:
		'https://github.com/rerelurelu/kilonova/assets/43092452/f9f07b5d-2bae-4c17-a95e-14a88dd93579',
	IMAGE_TYPE: 'image/png',
	WIDTH: '700',
	HEIGHT: '700',
}

export const baseMeta: DocumentMeta[] = [
	{
		name: 'type',
		content: 'website',
	},
	{
		property: 'og:type',
		content: 'website',
	},
	{
		property: 'og:image',
		content: OG_IMAGE.IMAGE,
	},
	{
		property: 'og:image:type',
		content: OG_IMAGE.IMAGE_TYPE,
	},
	{
		property: 'og:image:width',
		content: OG_IMAGE.WIDTH,
	},
	{
		property: 'og:image:height',
		content: OG_IMAGE.HEIGHT,
	},
]
