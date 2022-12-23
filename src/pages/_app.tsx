import type { AppProps } from 'next/app'

import Layout from '@components/Layout'

import '@styles/globals.scss'

type ExtendedAppProps = {
	pageProps: any
	Component: AppProps['Component'] & { Layout?: any }
}

function MyApp({ Component, pageProps }: ExtendedAppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
