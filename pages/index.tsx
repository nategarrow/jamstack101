import { useRef, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { PageHero, PageJavaScript, PageAPI, PageMarkup, PageResults, PageFooter } from '../components/pageSections';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`jamstack101 | made with <3 for Monogram`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHero />
      <PageJavaScript />
      <PageAPI />
      <PageMarkup />
      <PageResults />
      <PageFooter />
    </div>
  )
}

export default Home
