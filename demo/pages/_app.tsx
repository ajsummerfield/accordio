import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../../src/Accordio/Accordio.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
