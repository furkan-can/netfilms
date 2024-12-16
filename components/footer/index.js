import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
        Made with ❤️ by&nbsp;
        <Link href="https://github.com/furkan-can" target="_blank">
          Furkan Can TAVUKCU
        </Link>
      </footer>
    )
}

export default Footer
