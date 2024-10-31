import Link from "next/link";
import { ABOUT_URL, ROOT_URL } from "@/utils/urls";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <code className={styles.code}>scroll with me</code>
      <nav className={styles.nav}>
        <Link className={styles.link} href={ROOT_URL}>
          root
        </Link>
        <Link className={styles.link} href={ABOUT_URL}>
          about
        </Link>
      </nav>
    </header>
  );
};
