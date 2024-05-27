import styles from "./BookBorrowers.module.css";

import { useState } from "react";

const BorrowersList = () => {
  const [sortOption, setSortOption] = useState("bookId");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Borrowers List</h1>
          <div className={styles.actions}>
            <input
              className={`${styles.input} ${styles.searchInput}`}
              placeholder="Search by book ID or student name"
              type="search"
            />
            <div className={styles.dropdown}>
              <button className={styles.sortButton}>
                <span className={styles.icon}>⇅</span>
                Sort
              </button>
              <div className={styles.dropdownContent}>
                <label className={styles.dropdownLabel}>Sort by</label>
                <div className={styles.dropdownSeparator}></div>
                <div className={styles.dropdownOptions}>
                  <label className={styles.radioItem}>
                    <input
                      type="radio"
                      name="sort"
                      value="bookId"
                      checked={sortOption === "bookId"}
                      onChange={handleSortChange}
                    />
                    Book ID
                  </label>
                  <label className={styles.radioItem}>
                    <input
                      type="radio"
                      name="sort"
                      value="studentName"
                      checked={sortOption === "studentName"}
                      onChange={handleSortChange}
                    />
                    Student Name
                  </label>
                  <label className={styles.radioItem}>
                    <input
                      type="radio"
                      name="sort"
                      value="matriculationNumber"
                      checked={sortOption === "matriculationNumber"}
                      onChange={handleSortChange}
                    />
                    Matriculation Number
                  </label>
                  <label className={styles.radioItem}>
                    <input
                      type="radio"
                      name="sort"
                      value="returnDate"
                      checked={sortOption === "returnDate"}
                      onChange={handleSortChange}
                    />
                    Return Date
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr className={styles.tableRow}>
                <th className={styles.tableHead}>Book ID</th>
                <th className={styles.tableHead}>Student Name</th>
                <th className={styles.tableHead}>Matriculation Number</th>
                <th className={styles.tableHead}>Return Date</th>
                <th className={`${styles.tableHead} ${styles.textRight}`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {borrowers.map((borrower) => (
                <tr key={borrower.bookId} className={styles.tableRow}>
                  <td className={`${styles.tableCell} ${styles.fontMedium}`}>
                    {borrower.bookId}
                  </td>
                  <td className={styles.tableCell}>{borrower.studentName}</td>
                  <td className={styles.tableCell}>
                    {borrower.matriculationNumber}
                  </td>
                  <td className={styles.tableCell}>{borrower.returnDate}</td>
                  <td className={`${styles.tableCell} ${styles.textRight}`}>
                    <div className={styles.dropdown}>
                      <button
                        className={`${styles.actionButton} ${styles.iconButton}`}
                      >
                        ⋮
                      </button>
                      <div className={styles.dropdownContent}>
                        <button className={styles.dropdownItem}>
                          Mark as returned
                        </button>
                        <button className={styles.dropdownItem}>
                          Contact student
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const borrowers = [
  {
    bookId: "BK001",
    studentName: "Olivia Martin",
    matriculationNumber: "2023-0001",
    returnDate: "2023-05-15",
  },
  {
    bookId: "BK002",
    studentName: "Ava Johnson",
    matriculationNumber: "2023-0002",
    returnDate: "2023-04-30",
  },
  {
    bookId: "BK003",
    studentName: "Michael Johnson",
    matriculationNumber: "2023-0003",
    returnDate: "2023-03-20",
  },
  {
    bookId: "BK004",
    studentName: "Lisa Anderson",
    matriculationNumber: "2023-0004",
    returnDate: "2023-02-15",
  },
  {
    bookId: "BK005",
    studentName: "Samantha Green",
    matriculationNumber: "2023-0005",
    returnDate: "2023-01-30",
  },
  {
    bookId: "BK006",
    studentName: "Adam Barlow",
    matriculationNumber: "2023-0006",
    returnDate: "2023-01-15",
  },
  {
    bookId: "BK007",
    studentName: "Sophia Anderson",
    matriculationNumber: "2023-0007",
    returnDate: "2023-12-01",
  },
  {
    bookId: "BK008",
    studentName: "Daniel Smith",
    matriculationNumber: "2023-0008",
    returnDate: "2023-11-20",
  },
];

export default BorrowersList;
