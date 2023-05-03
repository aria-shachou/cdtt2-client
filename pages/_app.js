import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
