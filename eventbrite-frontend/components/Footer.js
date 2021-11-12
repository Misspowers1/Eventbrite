import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; FemiEvents 2021</p>
      <span className={styles.span}>
        <p>
          <Link href="/about">About this Project</Link>
        </p>
      </span>
    </footer>
  );
}
