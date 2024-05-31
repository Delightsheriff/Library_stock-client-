import { useEffect, useState } from "react";
import { useBooks } from "../../contexts/BookContext";
import styles from "./BorrowersList.module.css";
import BorrowersTableRow from "./BorrowersTableRow";
import { useAuth } from "../../contexts/AuthContext";

const BorrowersList = () => {
  const { borrowedBooks, borrowersList, books, fetchBooks } = useBooks();
  const { users, fetchUsers } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await borrowersList();
      await fetchBooks();
      await fetchUsers(); // Fetch users here
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const filteredBorrowedBooks = borrowedBooks.filter((book) => !book.returned);

  const findBookTitleById = (id) => {
    const book = books.find((book) => book._id === id);
    return book ? book.title : "Unknown Title";
  };

  const findLibrarianUsernameById = (id) => {
    const librarian = users.find((user) => user._id === id);
    return librarian ? librarian.username : "Unknown Librarian";
  };

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a more sophisticated loading indicator if you want
  }

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
                    bookTitle={findBookTitleById(borrower.book)}
                    librarianUsername={findLibrarianUsernameById(
                      borrower.librarian,
                    )} // Pass the librarian's username here
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
