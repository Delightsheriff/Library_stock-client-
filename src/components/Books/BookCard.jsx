import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link for routing
import styles from "./BookCard.module.css";
import picUrl from "../../assets/4877010.jpg";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const BookCard = ({ book, deleteBook }) => {
  const handleDelete = () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this book?",
    );
    if (shouldDelete) {
      deleteBook(book._id);
    }
  };

  return (
    <section className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <img
            alt={book.title}
            className={styles.bookImage}
            src={book.image || picUrl}
          />
          <div className={styles.bookDetails}>
            <h3 className={styles.bookTitle}>
              &nbsp;
              {book.title}
            </h3>
            <p className={styles.bookAuthor}>by {book.author}</p>
          </div>
        </div>
        <div className={styles.bookInfo}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>ISBN: </span>
            <span className={styles.infoValue}>&nbsp;{book.ISBN}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Publisher: </span>
            <span className={styles.infoValue}>&nbsp;{book.publisher}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Publication Date:</span>
            <span className={styles.infoValue}>
              &nbsp;{book.publication_date.substring(0, 4)}
            </span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Quantity:</span>
            <span className={styles.infoValue}>&nbsp;{book.quantity}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Location:</span>
            <span className={styles.infoValue}>&nbsp;{book.location}</span>
          </div>
        </div>
        <p className={styles.bookDescription}>{book.description}</p>
        <div className={styles.actions}>
          <Link
            to={`/books/edit-book/${book._id}`}
            className={styles.editButton}
          >
            <FiEdit />
          </Link>
          <button onClick={handleDelete} className={styles.deleteButton}>
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </section>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired, // assuming book id is a string
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string,
    ISBN: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    publication_date: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookCard;
