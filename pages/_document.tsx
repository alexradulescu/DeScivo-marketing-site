import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <meta name="description" content="" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://descivo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DeScivo" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/og-image.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="descivo.com" />
        <meta property="twitter:url" content="https://descivo.com/" />
        <meta name="twitter:title" content="DeScivo" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="/og-image.png" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
