import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../../contexts/BookContext"; // Adjust the path as necessary
import styles from "./CategoryBooks.module.css";
import BookCard from "./BookCard";

const CategoryBooks = () => {
  const { category } = useParams();
  const { books, fetchBooks, loading } = useBooks();
  const [filteredBooks, setFilteredBooks] = useState([]);
  console.log(category);
  console.log(books);

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
        </div>
        <div className={styles.bookGrid} />
        {filteredBooks.length ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found in this category.</p>
        )}
      </div>
    </main>
    // <div>

    //   <h1>{category} Books</h1>
    //   {filteredBooks.length ? (
    //     <ul>
    //       {filteredBooks.map((book) => (
    //         <li key={book.id}>{book.title}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No books found in this category.</p>
    //   )}
    // </div>
  );
};

export default CategoryBooks;
