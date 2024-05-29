import { Link } from "react-router-dom";
import styles from "./BorrowBook.module.css";
import PropTypes from "prop-types";

function BorrowCard({ book }) {
  return (
    <div className={styles.bookCard}>
      <div className={styles.bookInfo}>
        <h3 className={styles.bookTitle}>{book.title}</h3>
        <p className={styles.bookAuthor}>{book.author}</p>

        <Link to={`/books/borrow/${book._id}`} className={styles.borrowButton}>
          Borrow
        </Link>
      </div>
    </div>
  );
}

BorrowCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BorrowCard;
