import './../styles/style.scss';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
  );
}

export default MyApp;
