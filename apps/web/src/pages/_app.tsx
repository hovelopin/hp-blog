import ScreenLayout from "components/layout/ScreenLayout";
import type { AppProps } from "next/app";
import "../styles/minireset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScreenLayout>
      <Component {...pageProps} />
    </ScreenLayout>
  );
}
