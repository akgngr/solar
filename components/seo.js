import Head from 'next/head'

function Seo(props) {
    return(
        <Head>
            <title>{props.title}</title>
            <meta name="title" content={props.title} />
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.metakey} />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf8" />
            <meta name="language" content="Turkish" />
            <meta name="author" content="Abdulkadir Gungor"></meta>
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content="../images/logo.png" />
            <meta name="twitter:card" content={props.description} />
            <meta name="twitter:site" content="@Teknolojik3" />
            <meta name="twitter:creator" content="@Teknolojik3" />
            <meta property="og:url" content="http://dervissolar.com" />
        </Head>
    )
}

export default Seo