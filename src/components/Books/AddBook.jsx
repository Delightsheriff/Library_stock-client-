import styles from "./AddBook.module.css";

function AddBook() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add New Book</h1>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            id="title"
            placeholder="Enter book title"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="author" className={styles.label}>
            Author
          </label>
          <input
            id="author"
            placeholder="Enter author name"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="isbn" className={styles.label}>
            ISBN
          </label>
          <input id="isbn" placeholder="Enter ISBN" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="publisher" className={styles.label}>
            Publisher
          </label>
          <input
            id="publisher"
            placeholder="Enter publisher name"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="publication-date" className={styles.label}>
            Publication Date
          </label>
          <input id="publication-date" type="date" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter book description"
            className={styles.textarea}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="category" className={styles.label}>
            Category
          </label>
          <select id="category" className={styles.select}>
            <option value="" disabled>
              Select category
            </option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
            <option value="science">Science</option>
            <option value="technology">Technology</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="quantity" className={styles.label}>
            Quantity
          </label>
          <input id="quantity" min="1" type="number" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="location" className={styles.label}>
            Location
          </label>
          <input
            id="location"
            placeholder="Enter book location"
            className={styles.input}
          />
        </div>
      </form>
      <div className={styles.actions}>
        <button className={styles.button}>Save Book</button>
      </div>
    </div>
  );
}

export default AddBook;
