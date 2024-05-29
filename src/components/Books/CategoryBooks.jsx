import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBooks } from "../../contexts/BookContext"; // Adjust the path as necessary
import styles from "./CategoryBooks.module.css";
import BookCard from "./BookCard";
import { IoArrowBack } from "react-icons/io5";

const CategoryBooks = () => {
  const { category } = useParams();
  const { books, fetchBooks, loading, deleteBook } = useBooks();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const navigate = useNavigate();

  useEffect(() => {
    if (books.length === 0) {
      fetchBooks();
    }
  }, [books.length, fetchBooks]);

  useEffect(() => {
    if (category && books.length > 0) {
      const filtered = books.filter((book) => book.category === category);
      setFilteredBooks(filtered);
    }
  }, [category, books]);

  if (loading) {
    return <p>Loading...</p>;
  }

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  // Calculate the books to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = filteredBooks.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <h1 className={styles.title}>
            Books in {category.replace(/_/g, " ")}
          </h1>
          <p className={styles.subtitle}>
            Browse through our selection of books in this category.
          </p>

          <div className={styles.backBtn}>
            <button className={styles.borrowButton} onClick={goBack}>
              <IoArrowBack />
            </button>
          </div>
        </div>
        <div className={styles.bookGrid}>
          {currentBooks.length ? (
            currentBooks.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                fetchBooks={fetchBooks}
                deleteBook={deleteBook}
              />
            ))
          ) : (
            <p>No books found in this category.</p>
          )}
        </div>
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={styles.borrowButton}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={styles.borrowButton}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default CategoryBooks;
