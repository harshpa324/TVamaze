import '../styles/globals.css';
import Header from '@/components/Header';
export const Metadata= {
  title: 'TVamaze',
  description: 'A simple website that displays shows and movies along with their summary',
}
function MyApp({ Component, pageProps }) {
  return (<><Header/> <Component {...pageProps} />;</>)
}

export default MyApp;
