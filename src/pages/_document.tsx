import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="flex flex-col justify-center items-center">
      <Head />
      <body className="flex flex-col justify-center items-center max-w-[376]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
