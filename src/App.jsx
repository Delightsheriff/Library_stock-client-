import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Spinner from "./components/Spinners/Spinner";
import BorrowersList from "./components/Books/BookBorrowers";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import CategoryBooks from "./components/Books/CategoryBooks";
import { BookProvider } from "./contexts/BookContext";
import EditBook from "./components/Books/EditBook";

const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const MainApp = lazy(() => import("./pages/MainApp"));
const AllBooks = lazy(() => import("./components/Books/AllBooks"));
const AddBook = lazy(() => import("./components/Books/AddBook"));
const BookBorrow = lazy(() => import("./components/Books/BookBorrow"));

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <BookProvider>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route index element={<Home />} />
                <Route path="register" element={<Signup />} />
                <Route path="login" element={<Login />} />

                <Route
                  path="books"
                  element={
                    <ProtectedRoute>
                      <MainApp />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<AllBooks />} />
                  <Route path="books/add-book" element={<AddBook />} />
                  <Route path="books/borrow-book" element={<BookBorrow />} />
                  <Route
                    path="books/book-borrowers"
                    element={<BorrowersList />}
                  />
                  <Route path="books/settings" element={<p>Settings</p>} />
                  <Route path=":category" element={<CategoryBooks />} />
                  <Route path="edit-book/:id" element={<EditBook />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{
                margin: "8px",
              }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 3000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "580px",
                  padding: "16px 24px",
                  background: "var(--background)",
                  color: "var(--text)",
                },
              }}
            />
          </BookProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
