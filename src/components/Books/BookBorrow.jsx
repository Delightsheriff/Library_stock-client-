import styles from "./BookBorrow.module.css";

function BookBorrow() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Library Book Borrowing</h1>
        <p className={styles.subtitle}>
          Fill out the form to borrow a book from the library.
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="bookId" className={styles.label}>
            Book ID
          </label>
          <input
            id="bookId"
            placeholder="Enter the book ID"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="studentName" className={styles.label}>
            Student Name
          </label>
          <input
            id="studentName"
            placeholder="Enter your name"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="matriculationNumber" className={styles.label}>
            Matriculation Number
          </label>
          <input
            id="matriculationNumber"
            placeholder="Enter your matriculation number"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="returnDate" className={styles.label}>
            Return Date
          </label>
          <input id="returnDate" type="date" className={styles.input} />
        </div>
        <button
          className={`${styles.button} ${styles.fullWidth}`}
          type="submit"
        >
          Borrow Book
        </button>
      </form>
    </div>
  );
}

export default BookBorrow;
