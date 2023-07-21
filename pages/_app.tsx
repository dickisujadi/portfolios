import React from "react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <header>Header content</header> */}
      <main>
        <Component {...pageProps} />
      </main>
      {/* <footer>Footer content</footer> */}
    </div>
  );
}

export default MyApp;
