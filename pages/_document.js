import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="sample/css/bootstrap.css" />
        <link rel="stylesheet" href="sample/css/font-awesome.min.css" />
        <link rel="stylesheet" href="sample/css/style.css" />
        <link rel="stylesheet" href="sample/css/responsive.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
