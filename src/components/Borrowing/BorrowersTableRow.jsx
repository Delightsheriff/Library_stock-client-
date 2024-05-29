import { useBooks } from "../../contexts/BookContext";
import styles from "./BorrowersList.module.css";
import PropTypes from "prop-types";

//eslint-disable-next-line
const BorrowersTableRow = ({ borrower, user, bookTitle }) => {
  const { returnBook } = useBooks();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  const handleCheckboxChange = async (e) => {
    if (e.target.checked) {
      const confirmed = window.confirm("Has the user returned the book?");
      if (confirmed) {
        // Update the returned status and call returnBook function
        await returnBook(borrower._id);
      } else {
        // If the user cancels the action, uncheck the checkbox
        e.target.checked = false;
      }
    }
  };

  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableData}>
        <div className={styles.flexContainer}>
          <div className={styles.avatar} />
          <div>
            <div className={styles.borrowerName}>{borrower.studentName}</div>
            <div className={styles.borrowerEmail}>
              {borrower.matriculationNumber}
            </div>
          </div>
        </div>
      </td>
      <td className={styles.tableData}>
        <div className={styles.text}>{bookTitle}</div>{" "}
        {/* Use the book title prop here */}
      </td>
      <td className={styles.tableData}>
        <div className={styles.text}>{formatDate(borrower.borrowDate)}</div>
      </td>
      <td className={styles.tableData}>
        <div className={styles.text}>{formatDate(borrower.returnDate)}</div>
      </td>

      <td className={styles.tableData}>
        <div className={styles.text}>{user.username}</div> {/* Change here */}
      </td>
      <td className={styles.tableData}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={borrower.returned}
            onChange={handleCheckboxChange}
          />
        </div>
      </td>
    </tr>
  );
};

BorrowersTableRow.propTypes = {
  borrower: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    studentName: PropTypes.string,
    matriculationNumber: PropTypes.string,
    borrowDate: PropTypes.string,
    returnDate: PropTypes.string,
    returned: PropTypes.bool,
    bookId: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  bookTitle: PropTypes.string.isRequired,
};

export default BorrowersTableRow;
