import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../components/Accordio/Accordio.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
