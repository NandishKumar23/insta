import '../styles/globals.css'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil';


function MyApp({ Component, pageProps }:  AppProps): JSX.Element {
  return <SessionProvider >
    <RecoilRoot>
    <Component {...pageProps} />

    </RecoilRoot>
     
  </SessionProvider>;
}

export default MyApp;
