import NavbarComponent from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from '@chakra-ui/react'
'use client'

import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
      
      <SessionProvider session={session}>
        <ChakraProvider>
    <NavbarComponent /><Component {...pageProps} />
    </ChakraProvider></SessionProvider>
  )
}