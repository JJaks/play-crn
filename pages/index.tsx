import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';
import Game from './game';

export interface AppState {
  particleAmount: any;
  playGame: boolean;
  infections: any;
}
export default class Home extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = { particleAmount: "", playGame: false, infections: "" };
    this.handleChange = this.handleChange.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  handleChange(event: any) {
    if (event.target.id == "particleAmount") {
      this.setState({ particleAmount: event.target.value });
    } else {
      this.setState({ infections: event.target.value });
    }

  }

  startGame() {
    let valueRegex = /^[1-9]\d*$/;
    let value = this.state.particleAmount;
    let infection = this.state.infections;
    let isValidValue = valueRegex.test(value);
    let isValidInf = valueRegex.test(infection);
    let isBigNumber = parseInt(value) > 60 ? true : false;
    let isBiggerThanInf = parseInt(value) > parseInt(infection) ? true : false;

    if (isValidValue && !isBigNumber && isBiggerThanInf && isValidInf) {
      this.setState({ playGame: true });
    } else {
      console.warn("Value inserted is not valid or is too big, isValidValue: [", isValidValue, value, " ] isBigNumber: [", isBigNumber, value, "]");
      console.warn("Infected value inserted is not valid or is too big, isValidValue: [", isValidInf, infection, " ] isBiggerThanInf: [", isBiggerThanInf, value, infection, "]");
      if (isBigNumber) {
        alert("Please don't try to kill your browser or the simulation...try a lower number");
      } else if (!isBiggerThanInf) {
        alert("Sorry...that doesn't compute. There has to be more objects than infected");
      } else if (!isValidInf) {
        alert("Sorry...please insert a valid value for infected. Current value(" + infection + ") is not valid");
      } else {
        alert("Please insert a valid number of objects. Current value(" + value + ") is not valid");
      }
    }
  }

  render() {
    if (this.state.playGame) {
      return (<Game particleAmount={parseInt(this.state.particleAmount)} infectionsAmount={parseInt(this.state.infections)}></Game>);
    }

    return (
      <div className={styles.container}>
        <Head>
          <title>Jaagop - Simulation - Start</title>
          <meta name="description" content="Next App - Simulation" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Let&apos;s play a simulation.
          </h1>

          <p className={styles.description}>
            This is a simple &quot;simulation&quot; made using Next.JS, Typescript, CSS and other magical tricks like tsParticles. <br></br>
            Get started by inserting a number of objects (let&apos;s call them people).
          </p>

          <input id="particleAmount" type="number" min="0" placeholder="Enter object amount" value={this.state.particleAmount} onChange={this.handleChange}></input>
          <p className={styles.infected}>
            Pssst...infected amount defines the number of infected that there are out of objects.
          </p>
          <input id="infectionAmount" type="number" min="0" placeholder="Enter infected amount" value={this.state.infections} onChange={this.handleChange}></input>

          <button className="start" onClick={this.startGame} data-title="Start the game"></button>
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

