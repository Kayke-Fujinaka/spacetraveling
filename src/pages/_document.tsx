import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="spacetraveling" />
          <meta name="author" content="Kayke Fujinaka" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
