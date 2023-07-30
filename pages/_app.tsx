import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { theme } from "../theme/theme";
import { GlobalStyle } from "../theme/GlobalStyle";
import { gotham_medium } from "../fonts/gotham_medium";
import Head from "next/head";
import { VisibilityProvider } from "../context/VisibilityProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="locale" content="de" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout customfont={gotham_medium}>
          <VisibilityProvider>
            <Component {...pageProps} />
          </VisibilityProvider>
        </Layout>
      </ThemeProvider>
    </>
  );
}
