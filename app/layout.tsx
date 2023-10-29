import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getCurrentUser } from '@/libs/session'
import './globals.css'

/* UI Elements */
import Navbar from '@/components/layout/navbar'
import HomeHeader from '@/components/home-header'
import Switcher from '@/components/switcher';
import Footer from '@/components/layout/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bloody ARK - Evolve or Die',
  description: 'Welcome to BloodyARK, The perfect Ark: Survival Ascended experience. This server was established in 2017 and is still running strong as one of the biggest unofficial ark communities.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  // Get User
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className + "bg-bgray-bg dark"}>
        <Switcher user={user}/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
