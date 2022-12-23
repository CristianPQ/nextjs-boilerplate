/* eslint-disable react/no-multi-comp */
import React from 'react'

function Header() {
	return <h3>This is Header</h3>
}

function Footer() {
	return <h3>This is Footer</h3>
}

function Layout({ children }: { children: any }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
export default Layout
