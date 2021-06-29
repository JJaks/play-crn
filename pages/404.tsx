import Image from 'next/image';
import styles from '../styles/game.module.css';
import React from "react";
import Head from 'next/head';


export default class custom404 extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }


    render() {
        return (
            <div className={styles.container}>
                <Head >
                    <title>Simulation - whoopsydaisy</title>
                    <meta name="description" content="Next App - Game" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    <p>Whoops something went weryyyyy wronk (404 - page not found) </p>
                </main>

                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Made by Jaagop and deployed by
                        <span className={styles.logo}>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>
                    </a>
                </footer>
            </div>

        );
    }

}