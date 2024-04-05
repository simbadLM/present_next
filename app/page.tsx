import type { Metadata } from 'next'
import Head from 'next/head'
import Header  from './header/page'
import Section from './section/page'
import Contact from './contact/page'
import Projet from './components/projects_gate/page'
import { Manrope } from 'next/font/google'
 
const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Présentation',
  description: 'Page d\'accueil de la présentation ce Quentin Balloy',
}



 
export default function Home() {
  return (
    <main className={manrope.className}>
      <Head>
        <title>Présentation</title>
  
      </Head>
      <Header />
      <Section />
      <Projet />
      <Contact />
    </main>
    
  )
}
