import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/style.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta board" />
        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para seu dia a dia escreva, planeje e organize-se...
          </h1>
          <p><span>100% gratuito</span> e online.</p>
        </section>
        <div className={styles.donaters}>
          <img src="https://sujeitoprogramador.com/steve.png" alt="Apoiadores" />
        </div>
      </main>
    </>
  );
};

export default Home;
