import Head from "next/head";

import {SupportButton} from "../../components/SupportButton"

import styles from "./style.module.scss";
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from "react-icons/fi";

export default function Board() {
  return (
    <>
      <Head>
        <title>Minhas tarefas - Board</title>
      </Head>
      <main className={styles.container}>
        <form>
          <input type="text" placeholder="Digite sua tarefa.." />
          <button type="submit">
            <FiPlus size={25} color="#222" />
          </button>
        </form>

        <h1>Você tem 2 tarefas!</h1>
        <section>
          <article className={styles.taskList}>
            <p>Praticar com todos os projetos dos cursos</p>
            <div className={styles.actions}>
              <div>
                <div>
                  <FiCalendar size={20} color="#ffb800" />
                  <time>06 Setembro 2022</time>
                </div>
                <button>
                  <FiEdit2 size={20} color="#fff" />
                  <span>Editar</span>
                </button>
              </div>
              <button>
                <FiTrash size={20} color="#ff3636" />
                <span>Excluir</span>
              </button>
            </div>
          </article>
        </section>
      </main>

      <div className={styles.VipContainer}>
        <h3>Obrigado por apoiar esse projeto !!</h3>
        <div>
          <FiClock size={28} color="#fff" />
          <time>
            Última doação foi a 3 dias.
          </time>
        </div>
      </div>

      <SupportButton />
    </>
  );
}
