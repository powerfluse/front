import Head from 'next/head'
import Script from 'next/script'

export default function HeadComponent(props) {
    return (<>
        <Script
            data-website-id="1c9bd3fa-8b0d-44f7-996d-3074f15df2c2"
            src="https://umami.bvpk.org/umami.js"
        />
        <Head>
            <title>
                {props.title ?
                    `${props.title} | BVPK - Bundesverband für Pyrotechnik und Kunstfeuerwerk`
                    : "BVPK - Bundesverband für Pyrotechnik und Kunstfeuerwerk"}
            </title>
            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="/favicon/apple-icon-57x57.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/favicon/apple-icon-60x60.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/favicon/apple-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/favicon/apple-icon-76x76.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/favicon/apple-icon-114x114.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/favicon/apple-icon-120x120.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/favicon/apple-icon-144x144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/favicon/apple-icon-152x152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-icon-180x180.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/favicon/android-icon-192x192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/favicon/favicon-96x96.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/manifest.json"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta
                name="msapplication-TileImage"
                content="/favicon/ms-icon-144x144.png"
            />
            <meta name="theme-color" content="#ffffff"/>
        </Head>
    </>)
}
