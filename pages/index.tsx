import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PostIndex from "./post"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import Navbar from "@/pages/Navbar"
import React from "react"

// store user details and jwt token in local storage to keep user logged in between page refreshes
export async function getStaticProps({locale}: any) {
    let ssrConfig = await serverSideTranslations(locale, ['common'])
    return {
        props: {
            // locale
            ...ssrConfig,
            // Will be passed to the page component as props
        }
    }
}

const Home: NextPage = () => (
    <div className={styles.container}>
        <PostIndex/>
    </div>
)

export default Home