import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

import { PrimeReactProvider } from 'primereact/api';

import Header from './_components/header/header';
import Menu from './_components/menu/menu';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <PrimeReactProvider> 
        <head>
          <link id="theme-link" rel="stylesheet" href="/themes/lara-light-blue/theme.css" />
        </head>
        <body className={inter.className}>
        <Header/>
        <Menu/>
          {children}
        </body>
      </PrimeReactProvider>
    </html>
  )
}
