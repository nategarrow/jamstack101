import type { NextPage } from 'next'
import Head from 'next/head'
import { PageHero, PageJavaScript, PageAPI, PageMarkup, PageResults, PageFooter } from '../components/pageSections';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`jamstack101 | made with <3 for Monogram`}</title>
        <meta name="description" content="Monogram interview project by Nathan Garrow" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <PageHero />
      <PageJavaScript />
      <PageAPI />
      <PageMarkup />
      <PageResults />
      <PageFooter />
    </>
  )
}

export default Home
