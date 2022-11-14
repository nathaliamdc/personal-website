import "../styles/globals.css";
import {useEffect} from "react";
import type {AppProps} from "next/app";
import {ThemeProvider} from "../styles/theme";
import Layout from "../components/Layout";
import analytics from "../analytics";

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    analytics.track("Visited website");
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
