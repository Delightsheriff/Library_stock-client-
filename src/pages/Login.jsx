import LandNav from "../components/Nav/LandNav";
import Footer from "../components/Footer/Footer";
import styles from "./Login.module.css";

function Login() {
  return (
    <>
      <LandNav />
      <main className={styles.main}>login</main>
      <Footer />
    </>
  );
}

export default Login;
