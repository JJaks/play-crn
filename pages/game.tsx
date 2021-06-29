import Image from 'next/image';
import styles from '../styles/game.module.css';
import React from "react";
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles";
import Router from 'next/dist/next-server/server/router';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

export interface GameProps {
    particleAmount: number;
}

export interface AppState {
    goBack: boolean;
}
export class Game extends React.Component<GameProps, AppState> {
    constructor(props: GameProps) {
        super(props);

        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main: any) {
        console.log(main);
    }

    particlesLoaded(container: any) {
        console.log(container);
    }

    goBack() {
        const router = useRouter();
        router.reload();
    }
    render() {
        let options: ISourceOptions = particlesOptions as ISourceOptions;
        if (!options) {
            throw new Error("Unexpected state");
        }

        // @ts-ignore 
        options.particles.number.value = this.props.particleAmount;
        return (
            <div className={styles.container}>
                <Head >
                    <title>Simulation</title>
                    <meta name="description" content="Next App - Game" />
                    <link rel="icon" href="/favicon.ico" />
                    <a className="start" onClick={this.goBack} href="/" data-title="Go back"></a>
                </Head>
                <header className={styles.header}>
                    <a className="start" onClick={this.goBack} href="/" data-title="Go back"></a>
                </header>
                <main className={styles.main}>
                    <Particles
                        id="tsparticles"
                        options={options}
                        init={this.particlesInit}
                        loaded={this.particlesLoaded}

                    />
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