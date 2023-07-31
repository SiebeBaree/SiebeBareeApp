import type {AppProps} from 'next/app';
import {useEffect} from "react";
import Head from "next/head";
import AOS from 'aos';

import 'aos/dist/aos.css';
import '@/styles/globals.css';

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
        });
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Siebe Barée</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
