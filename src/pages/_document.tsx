import { Html, Head, Main, NextScript } from "next/document";

const Document = (): React.ReactNode => {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          href="/images/icons/favicon.svg"
          type="image/x-icon"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  );
};

export default Document;
