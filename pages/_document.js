import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";
export default function Document() {
  return (
    <Html>
      <Head />
      <body
        className="bg-gradient-to-r
      from-sky-400
      via-cyan-300
      to-cyan-400
      h-full"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
