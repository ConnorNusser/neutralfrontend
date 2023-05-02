import NavbarComponent from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return <SessionProvider session={session}>
    <NavbarComponent /><Component {...pageProps} /></SessionProvider>
}