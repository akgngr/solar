import Link from 'next/link'
import Head from 'next/head'
import Header from "./header";
import Menu from './menu'
import Footer from './Footer'

export default function Layout({
       children,
       title = 'This is the default title',
   }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <Header/>
                <Menu/>
            </header>

            {children}

            <Footer />
        </div>
    )
}