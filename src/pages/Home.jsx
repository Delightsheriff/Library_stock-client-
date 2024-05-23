import LandNav from "../components/Nav/LandNav";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <LandNav />
      <main className={styles.main}>Home</main>
      <Footer />
    </>
  );
}

export default Home;
