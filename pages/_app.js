import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faInstagram, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faLinkedin, faInstagram, faFontAwesome)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
