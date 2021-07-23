import '../styles/globals.scss';
import { motion } from 'framer-motion';
import { Router } from 'next/router';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      // initial="initial"
      // animate="animate"
      // variants={{
      //   initial: {
      //     opacity: 0,
      //   },
      //   animate: {
      //     opacity: 1,
      //   },
      // }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
