import { component$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head/router-head'

import '@fontsource/overpass/400.css'
import '@fontsource/overpass/600.css'
import { css } from '~/styled-system/css'
import './global.css'

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */

	return (
		<QwikCityProvider>
			<head>
				<meta charSet='utf-8' />
				<link href='/manifest.json' rel='manifest' />
				<RouterHead />
				<ServiceWorkerRegister />
			</head>
			<body class={css({ bg: '#fde047' })} lang='ja'>
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	)
})
