import { Link } from "react-router-dom";
import LandNav from "../components/Nav/LandNav";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <LandNav />
      <main className={styles.main}>
        <section className={styles.outer}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              WELCOME TO THE UNIVERSITY OF PORT-HARCOURT LIBRARY
            </h1>
            <p className={styles.description}>
              &quot;Unlock a world of knowledge! At the University Library,
              access to a treasure trove of books, journals, and resources to
              fuel the academic journey of our students.
            </p>
            <p className={styles.subtitle}>
              Admin access is required to continue accessing the site, click
              &nbsp;
              <span>Register.</span>
            </p>
          </div>
        </section>
        <section className={styles.inner}>
          <div className={styles.container_in}>
            <Link to="register" className={styles.btn}>
              Register
            </Link>
            <p className={styles.nb}>
              <span>*</span>
              &nbsp;Only Library Admins are allowed access on the site.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
