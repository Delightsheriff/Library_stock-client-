import { useNavigate, useParams } from "react-router-dom";
import { useBooks } from "../../contexts/BookContext";
import styles from "./Borrow.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";

function Borrow() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    fetchBooks,
    loading,
    getSingleBook,
    singleBook,
    borrowBook,
    resetSingleBook,
  } = useBooks();
  const { user } = useAuth();
  const [studentName, setStudentName] = useState("");
  const [matriculationNumber, setMatriculationNumber] = useState("");
  const [returnDate, setReturnDate] = useState("");
  // eslint-disable-next-line
  const [borrowDate, setBorrowDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  useEffect(() => {
    if (singleBook === null) {
      getSingleBook(id);
    }
    return () => {
      resetSingleBook();
    };
  }, [id]);

  const handleBorrowBook = async (e) => {
    e.preventDefault();
    await borrowBook(
      {
        bookId: id,
        studentName,
        matriculationNumber,
        borrowDate,
        returnDate,
        librarianId: user._id,
      },
      fetchBooks,
    );
    navigate("/books");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Borrow a Book</h2>
        <p className={styles.cardDescription}>
          Fill out the form to borrow a book from the library.
        </p>
      </div>
      <div className={styles.backBtn}>
        <button className={styles.borrowButton} onClick={goBack}>
          <IoArrowBack />
        </button>
      </div>
      <form className={styles.cardContent} onSubmit={handleBorrowBook}>
        <div className={styles.formGroup}>
          <label htmlFor="book-name" className={styles.label}>
            Book Name
          </label>
          <input
            id="book-name"
            value={singleBook?.title || ""}
            className={styles.input}
            disabled
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="student-name" className={styles.label}>
            Student Name
          </label>
          <input
            id="student-name"
            placeholder="Enter your name"
            className={styles.input}
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="student-id" className={styles.label}>
            Student ID
          </label>
          <input
            id="student-id"
            placeholder="Enter your matriculation number"
            className={styles.input}
            value={matriculationNumber}
            onChange={(e) => setMatriculationNumber(e.target.value)}
          />
        </div>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label htmlFor="borrow-date" className={styles.label}>
              Borrow Date
            </label>
            <input
              id="borrow-date"
              type="date"
              className={styles.input}
              value={borrowDate}
              disabled
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="return-date" className={styles.label}>
              Return Date
            </label>
            <input
              id="return-date"
              type="date"
              className={styles.input}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="librarian-name" className={styles.label}>
            Librarian Name
          </label>
          <input
            id="librarian-name"
            value={user.username}
            className={styles.input}
            disabled
          />
        </div>
        <div className={styles.cardFooter}>
          <button type="submit" className={styles.button}>
            Borrow Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default Borrow;
