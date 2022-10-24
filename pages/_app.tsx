import "../styles/globals.css";
import type {AppProps} from "next/app";
import {ThemeProvider} from "../styles/theme";
import Layout from "../components/Layout";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
