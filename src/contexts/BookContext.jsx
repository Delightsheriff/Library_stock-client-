import { createContext, useContext, useReducer, useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const BookContext = createContext();

const BASE_URL = "http://localhost:4001/api/v1/books";

const initialState = {
  books: [],
  borrowedBooks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "fetchBooks":
      return { ...state, books: action.payload.books };

    case "addBook":
      return { ...state, books: [...state.books, action.payload] };

    case "deleteBook":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case "updateBook":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book,
        ),
      };

    case "borrowBook":
      return {
        ...state,
        borrowedBooks: [...state.borrowedBooks, action.payload],
        books: state.books.map((book) =>
          book.id === action.payload.id ? { ...book, available: false } : book,
        ),
      };

    case "returnBook":
      return {
        ...state,
        borrowedBooks: state.borrowedBooks.filter(
          (book) => book.id !== action.payload,
        ),
        books: state.books.map((book) =>
          book.id === action.payload ? { ...book, available: true } : book,
        ),
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function BookProvider({ children }) {
  const [{ books, borrowedBooks }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/all-books`);
      const data = await response.json();
      dispatch({ type: "fetchBooks", payload: data });
    } catch (error) {
      toast.error("Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (book) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/create-book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "addBook", payload: data });
        toast.success("Book added successfully.");
      } else {
        toast.error(data.message || "Failed to add book.");
      }
    } catch (error) {
      toast.error("Failed to add book.");
    } finally {
      setLoading(false);
    }
  };

  const deleteBook = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}delete-book/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        dispatch({ type: "deleteBook", payload: id });
        toast.success("Book deleted successfully.");
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to delete book.");
      }
    } catch (error) {
      toast.error("Failed to delete book.");
    } finally {
      setLoading(false);
    }
  };

  const updateBook = async (book) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/update-book/${book.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "updateBook", payload: data });
        toast.success("Book updated successfully.");
      } else {
        toast.error(data.message || "Failed to update book.");
      }
    } catch (error) {
      toast.error("Failed to update book.");
    } finally {
      setLoading(false);
    }
  };

  const borrowBook = async (bookId) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/books/borrow/${bookId}`, {
        method: "POST",
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "borrowBook", payload: data });
        toast.success("Book borrowed successfully.");
      } else {
        toast.error(data.message || "Failed to borrow book.");
      }
    } catch (error) {
      toast.error("Failed to borrow book.");
    } finally {
      setLoading(false);
    }
  };

  const returnBook = async (bookId) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/books/return/${bookId}`, {
        method: "POST",
      });
      if (response.ok) {
        dispatch({ type: "returnBook", payload: bookId });
        toast.success("Book returned successfully.");
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to return book.");
      }
    } catch (error) {
      toast.error("Failed to return book.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookContext.Provider
      value={{
        books,
        borrowedBooks,
        loading,
        fetchBooks,
        addBook,
        deleteBook,
        updateBook,
        borrowBook,
        returnBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

function useBooks() {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
}
BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export { BookProvider, useBooks };
