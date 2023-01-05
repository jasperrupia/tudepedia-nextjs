import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="icon" href="images/favicon.png" type="image/gif" /> */}
        <link rel="stylesheet" type="text/css" href="sample/css/bootstrap.css" />
        <link href="sample/css/font-awesome.min.css" rel="stylesheet" />
        <link href="sample/css/style.css" rel="stylesheet" />
        <link href="sample/css/responsive.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
