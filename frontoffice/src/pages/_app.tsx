import "./../css/styles.scss" 
import { AppProps } from 'next/app';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
export default function App({ Component, pageProps }: AppProps) {
  return<div>
    <Header/>
    <Component className="main-content" {...pageProps} />
    <Footer/>
    </div>
}