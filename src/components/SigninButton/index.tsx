import { signIn, signOut, useSession } from "next-auth/react";

import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SigninButton() {
  const { data } = useSession();

  console.log(data);

  return data?.session ? (
    <button
      type="button"
      className={styles.SigninButton}
      onClick={() => signOut()}
    >
      <img
        src="https://sujeitoprogramador.com/steve.png"
        alt="imagem provisoria"
      />
      Olá, Lucas
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.SigninButton}
      onClick={() => signIn()}
    >
      <FaGithub color="#ffb800" />
      Entrar com github
    </button>
  );
}
