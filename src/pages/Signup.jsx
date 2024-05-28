import LandNav from "../components/Nav/LandNav";
import Footer from "../components/Footer/Footer";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { isEmpty, isEmail, isLength } from "../utils/helpers";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";
import Spinner from "../components/Spinners/Spinner";

function Signup() {
  const { createAccount, loading } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };

    if (isEmpty(username)) {
      toast.error("Please enter your username.");
      return;
    }

    if (!isEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!isLength(password)) {
      toast.error("Please enter a password with at least 8 characters.");
      return;
    }

    try {
      createAccount(data);
    } catch (error) {
      // Handle any errors occurred during signup
      toast.error("Failed to create account. Please try again.");
    }
  };

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
          <form onSubmit={handleSubmit} className={styles.form}>
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
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              <div className={styles.input_box}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className={styles.input_box}>
                <label htmlFor="pasword">Password</label>
                <input
                  id="password"
                  placeholder="Enter your password"
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button className={styles.button}>Register</button>
            </div>
            <div className={styles.pass}>
              Already have an account? &nbsp;
              <Link className={styles.underline} to="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
      {loading && <Spinner />}
    </>
  );
}

export default Signup;
