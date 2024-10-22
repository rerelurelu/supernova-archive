import { component$ } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
	const head = useDocumentHead()
	const loc = useLocation()

	return (
		<>
			<title>{head.title}</title>

			<link href={loc.url.href} rel='canonical' />
			<meta content='width=device-width, initial-scale=1.0' name='viewport' />
			<link href='/favicon.ico' rel='icon' />

			{head.meta.map((m) => (
				<meta key={m.key} {...m} />
			))}

			{head.links.map((l) => (
				<link key={l.key} {...l} />
			))}

			{head.styles.map((s) => (
				// biome-ignore lint/security/noDangerouslySetInnerHtml: This is a template code
				<style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
			))}
		</>
	)
})
