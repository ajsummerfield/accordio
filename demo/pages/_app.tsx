import { AppProps } from 'next/app';
import 'accordio/styles/accordio.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
