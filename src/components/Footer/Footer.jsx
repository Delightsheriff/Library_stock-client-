import styles from "./Footer.module.css";

function Footer() {
  return (
    <main className={styles.main}>
      <footer className={styles.footer}>
        <p>@GroupC(GES400)</p>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Catalog</a>
          </li>
          <li>
            <a href="#">Library</a>
          </li>
        </ul>
      </footer>
    </main>
  );
}

export default Footer;
