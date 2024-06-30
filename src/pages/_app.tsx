import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  );
}
