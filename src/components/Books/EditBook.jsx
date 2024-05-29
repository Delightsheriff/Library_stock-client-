import { useEffect, useState } from "react";
import styles from "./EditBook.module.css";
import { useBooks } from "../../contexts/BookContext";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    updateBook,
    getSingleBook,
    singleBook,
    loading,
    resetSingleBook,
    fetchBooks,
  } = useBooks();
  const [book, setBook] = useState({
    title: "",
    author: "",
    ISBN: "",
    publisher: "",
    publication_date: "",
    quantity: 0,
    location: "",
    description: "",
  });
  useEffect(() => {
    if (singleBook === null) {
      getSingleBook(id);
    }
    return () => {
      resetSingleBook();
    };
  }, [id]);

  useEffect(() => {
    if (singleBook) {
      setBook({
        ...singleBook,
        publication_date: singleBook.publication_date.split("T")[0],
      });
    }
  }, [singleBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBook(book, fetchBooks);
    navigate(-1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Edit Book</h1>
        <p className={styles.description}>
          Update the details of this library book.
        </p>
      </header>
      <div className={styles.backBtn}>
        <button className={styles.borrowButton} onClick={goBack}>
          <IoArrowBack />
        </button>
      </div>
      <form className={styles.content} onSubmit={handleSubmit}>
        <div className={`${styles.grid} ${styles["grid-cols-2"]}`}>
          <div className={styles["space-y-2"]}>
            <label className={styles.label} htmlFor="title">
              Title
            </label>
            <input
              className={styles.input}
              id="title"
              name="title"
              value={book.title}
              onChange={handleChange}
              placeholder="Enter the book title"
            />
          </div>
          <div className={styles["space-y-2"]}>
            <label className={styles.label} htmlFor="author">
              Author
            </label>
            <input
              className={styles.input}
              id="author"
              name="author"
              value={book.author}
              onChange={handleChange}
              placeholder="Enter the author's name"
            />
          </div>
        </div>
        <div className={`${styles.grid} ${styles["grid-cols-2"]}`}>
          <div className={styles["space-y-2"]}>
            <label className={styles.label} htmlFor="isbn">
              ISBN
            </label>
            <input
              className={styles.input}
              id="isbn"
              name="ISBN"
              value={book.ISBN}
              onChange={handleChange}
              placeholder="Enter the ISBN"
            />
          </div>
          <div className={styles["space-y-2"]}>
            <label className={styles.label} htmlFor="publisher">
              Publisher
            </label>
            <input
              className={styles.input}
              id="publisher"
              name="publisher"
              value={book.publisher}
              onChange={handleChange}
              placeholder="Enter the publisher"
            />
          </div>
        </div>
        <div className={`${styles.grid} ${styles["grid-cols-2"]}`}>
          <div className={styles["space-y-2"]}>
            <label className={styles.label} htmlFor="publication_date">
              Publication Date
            </label>
            <input
              className={styles.input}
              id="publication_date"
              name="publication_date"
              type="date"
              value={book.publication_date}
              onChange={handleChange}
            />
          </div>
          <div className={styles["space-y-2"]}>
            <label className={styles.label} htmlFor="quantity">
              Quantity
            </label>
            <input
              className={styles.input}
              id="quantity"
              name="quantity"
              type="number"
              min="0"
              value={book.quantity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles["space-y-2"]}>
          <label className={styles.label} htmlFor="location">
            Location
          </label>
          <input
            className={styles.input}
            id="location"
            name="location"
            value={book.location}
            onChange={handleChange}
            placeholder="Enter the book's location"
          />
        </div>
        <div className={styles["space-y-2"]}>
          <label className={styles.label} htmlFor="description">
            Description
          </label>
          <textarea
            className={styles.textarea}
            id="description"
            name="description"
            value={book.description}
            onChange={handleChange}
            placeholder="Enter a description of the book"
          ></textarea>
        </div>
        <footer className={styles.footer}>
          <button className={styles.button} type="submit">
            Save Changes
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EditBook;
