import { FC, ReactNode } from 'react'
import Head from 'next/head'

import { Header, Footer } from '@/components'

interface IBasicLayoutProps {
  children: ReactNode
}

export const BasicLayout: FC<IBasicLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Loja</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
