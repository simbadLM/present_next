import type { Metadata } from 'next'
import Head from 'next/head'
import Header  from './header/page'; 
import Section from './section/page';

export const metadata: Metadata = {
  title: 'Présentation',
  description: 'Page d\'accueil de la présentation ce Quentin Balloy',
}



 
export default function Home() {
  return (
    <div>
      <Head>
    <link href="https://fonts.googleapis.com/css2?family=Manrope&family=Montserrat&display=swap" rel="stylesheet"></link>
    <title>Présentation</title>
      </Head>
      <Header />
      <Section />
    </div>
    
  )
}
