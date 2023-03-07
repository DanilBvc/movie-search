import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import MainPage from './MainPage'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Movie app</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainPage />
      </Provider>
    </>
  )
}
