import LandNav from "../components/Nav/LandNav";
import Footer from "../components/Footer/Footer";
import styles from "./Login.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinners/Spinner";

function Login() {
  const { login, isAuthenticated, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and password cannot be empty.");
      return;
    }
    login({ email, password });
  };

  useEffect(
    function () {
      if (isAuthenticated === true) {
        const from = location.state?.from || "/books";
        navigate(from, { replace: true });
      }
    },
    [isAuthenticated, location.state, navigate],
  );

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
              <p className={styles.sub_title}>Login to Continue to Dashboard</p>
            </div>
            <div className={styles.input_box}>
              <div className={styles.input_box}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.input_box}>
                <label htmlFor="pasword">Password</label>
                <input
                  id="password"
                  placeholder="Enter your password"
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className={styles.button}>Login</button>
            </div>
            <div className={styles.pass}>
              Don&apos;t have an account? &nbsp;
              <Link className={styles.underline} to="/register">
                Create account
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

export default Login;
