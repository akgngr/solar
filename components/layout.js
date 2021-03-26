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
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=0" />
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            </Head>
            <header>
                <Menu/>
            </header>

            {children}

            <Footer />
        </div>
    )
}