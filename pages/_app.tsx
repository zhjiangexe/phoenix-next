import React from "react"
import type {AppProps} from 'next/app'
import '../styles/globals.css'
// import Layout from "./Layout";
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools"
import styled from "styled-components"
import Navbar from "@/pages/Navbar"
import {appWithTranslation} from 'next-i18next'
import Head from "next/head"

const Layout = styled.div`
`

const Main = styled.div`
  background-color: #fafafa;
`

const MyApp = ({Component, pageProps}: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient())
  return <QueryClientProvider client={queryClient} contextSharing={true}>
    <Head>
      <title>Postlife</title>
      <meta name="description" content="post life"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Layout>
      <Navbar/>
      <Main>
        <Component {...pageProps} />
      </Main>
    </Layout>
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
}


export default appWithTranslation(MyApp)
