import PropTypes from "prop-types";
import styles from "./BookCard.module.css";
import picUrl from "../../assets/4877010.jpg";

const BookCard = ({ book }) => {
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
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p className={styles.bookAuthor}>by {book.author}</p>
          </div>
        </div>
        <div className={styles.bookInfo}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>ISBN:</span>
            <span className={styles.infoValue}>{book.ISBN}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Publisher:</span>
            <span className={styles.infoValue}>{book.publisher}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Publication Date:</span>
            <span className={styles.infoValue}>{book.publication_date}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Quantity:</span>
            <span className={styles.infoValue}>{book.quantity}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Location:</span>
            <span className={styles.infoValue}>{book.location}</span>
          </div>
        </div>
        <p className={styles.bookDescription}>{book.description}</p>
        {/* <button className={styles.borrowButton}>Borrow</button> */}
      </div>
    </section>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
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
};

export default BookCard;
