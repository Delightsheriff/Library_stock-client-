import styles from "./BookList.module.css";

function BookList() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <h1 className={styles.title}>Books in</h1>
          <p className={styles.subtitle}>
            Browse through our selection of books in the category.
          </p>
        </div>
        <div className={styles.bookGrid} />

        <section className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <img
                alt="Book Title"
                className={styles.bookImage}
                src="/placeholder.svg"
              />
              <div className={styles.bookDetails}>
                <h3 className={styles.bookTitle}>The Enchanted Forest</h3>
                <p className={styles.bookAuthor}>by Jane Doe</p>
              </div>
            </div>
            <div className={styles.bookInfo}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>ISBN:</span>
                <span className={styles.infoValue}>978-1-234-56789-0</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Publisher:</span>
                <span className={styles.infoValue}>Acme Publishing</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Publication Date:</span>
                <span className={styles.infoValue}>2023-05-01</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Quantity:</span>
                <span className={styles.infoValue}>50</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Location:</span>
                <span className={styles.infoValue}>Shelf A, Row 3</span>
              </div>
            </div>
            <p className={styles.bookDescription}>
              Immerse yourself in the enchanting world of The Enchanted Forest,
              a captivating tale of magic, adventure, and self-discovery. Follow
              the journey of a young protagonist as they navigate the wonders
              and challenges of this mystical realm, uncovering the secrets
              hidden within the ancient trees and encountering a cast of
              unforgettable characters.
            </p>
            {/* <button className={styles.borrowButton}>Borrow</button> */}
          </div>
        </section>
      </div>
    </main>
  );
}

export default BookList;
