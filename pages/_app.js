import '../styles/globals.css'
import { LanguageProvider } from "../context/LanguageContext";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
    </>
  )
}

export default MyApp
