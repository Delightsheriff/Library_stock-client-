import LandNav from "../components/Nav/LandNav";
import Footer from "../components/Footer/Footer";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";

function Signup() {
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
          </div>
        </section>
        <div className={styles.divide}>
          <form className={styles.form}>
            <div className={styles.center}>
              <p className={styles.sub_title}>Create An Account</p>
            </div>
            <div className={styles.input_box}>
              <div className={styles.input_box}>
                <label htmlFor="email">Username</label>
                <input
                  id="username"
                  placeholder="Enter your username"
                  required
                  type="text"
                />
              </div>
              <div className={styles.input_box}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </div>
              <div className={styles.input_box}>
                <label htmlFor="pasword">Password</label>
                <input
                  id="password"
                  placeholder="Enter your password"
                  required
                  type="password"
                />
              </div>
              <button className={styles.button}>Register</button>
            </div>
            <div className={styles.pass}>
              Already have an account? &nbsp;
              <Link className={styles.underline} to="/signup">
                Login
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Signup;
