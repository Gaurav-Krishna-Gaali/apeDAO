import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApeDaoProvider } from "../context/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApeDaoProvider>
      <Component {...pageProps} />;
    </ApeDaoProvider>
  );
}

export default MyApp;
