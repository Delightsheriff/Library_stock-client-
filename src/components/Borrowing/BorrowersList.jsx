import { useEffect } from "react";
import { useBooks } from "../../contexts/BookContext";
import styles from "./BorrowersList.module.css";
import BorrowersTableRow from "./BorrowersTableRow";
import { useAuth } from "../../contexts/AuthContext";

const BorrowersList = () => {
  const { borrowedBooks, borrowersList, books, fetchBooks } = useBooks();
  const { user } = useAuth();

  useEffect(() => {
    if (borrowedBooks.length === 0) {
      borrowersList();
    }
  }, [borrowedBooks, borrowersList]);

  useEffect(() => {
    if (books.length === 0) {
      fetchBooks();
    }
  }, [books, fetchBooks]);

  const filteredBorrowedBooks = borrowedBooks.filter((book) => !book.returned);

  const findBookTitleById = (id) => {
    const book = books.find((book) => book.book === id);
    return book ? book.title : "Unknown Title";
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Borrower&apos;s List</h1>
      <div className={styles.card}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHeaderRow}>
                <th className={styles.tableHeader}>Borrower</th>
                <th className={styles.tableHeader}>Books Borrowed</th>
                <th className={styles.tableHeader}>Checked Out</th>
                <th className={styles.tableHeader}>Due Date</th>
                <th className={styles.tableHeader}>Librarian</th>
                <th className={styles.tableHeader}>Returned</th>
              </tr>
            </thead>
            <tbody>
              {filteredBorrowedBooks.length > 0 ? (
                filteredBorrowedBooks.map((borrower) => (
                  <BorrowersTableRow
                    key={borrower._id}
                    borrower={borrower}
                    user={user}
                    bookTitle={findBookTitleById(borrower.bookId)} // Pass the book title here
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="6" className={styles.noData}>
                    No borrowed books to display.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BorrowersList;
