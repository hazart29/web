import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Feature from './components/Feature'
import Pricelist from './components/Pricelist'

export default function Home() {
  return (
    <div className='flex h-screen w-full'>
      <Head>
        <title>My Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col flex-1 w-full h-screen'>
        <Header />
        <div name='feature' className='flex flex-1 flex-col gap-12 w-full px-8 md:px-28'>
          <Feature />
          <Pricelist />
        </div>
      </main>

    </div>
  )
}
