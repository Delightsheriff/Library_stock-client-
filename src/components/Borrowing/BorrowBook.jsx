import { useEffect, useState } from "react";
import { useBooks } from "../../contexts/BookContext";
import styles from "./BorrowBook.module.css";
import BorrowCard from "./BorrowCard";

export default function BorrowBook() {
  const { books, loading, fetchBooks } = useBooks();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (books.length === 0) {
      fetchBooks();
    }
  }, [books.length, fetchBooks]);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = searchQuery
    ? books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Borrow a Book</h1>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            placeholder="Search for a book..."
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className={styles.bookGrid}>
        {isLoading ? (
          <div className={styles.loading}>Loading books...</div>
        ) : searchQuery && filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BorrowCard key={book._id} book={book} />)
        ) : (
          searchQuery && <div className={styles.noBooks}>No books found</div>
        )}
      </div>
    </div>
  );
}
