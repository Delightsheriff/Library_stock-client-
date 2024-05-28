import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Spinner from "./components/Spinners/Spinner";
import BorrowersList from "./components/Books/BookBorrowers";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const MainApp = lazy(() => import("./pages/MainApp"));
const AllBooks = lazy(() => import("./components/Books/AllBooks"));
const BookList = lazy(() => import("./components/Books/BookList"));
const AddBook = lazy(() => import("./components/Books/AddBook"));
const BookBorrow = lazy(() => import("./components/Books/BookBorrow"));

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<Spinner />}>
            <Routes>
              {/* Add routes here */}
              <Route index element={<Home />} />
              {/* Auth routes */}
              <Route path="register" element={<Signup />} />
              <Route path="login" element={<Login />} />

              {/* Main dashboard */}
              <Route
                path="books"
                element={
                  <ProtectedRoute>
                    <MainApp />
                  </ProtectedRoute>
                }
              >
                {/* All Categories of the books */}
                <Route index element={<AllBooks />} />
                <Route path="books/add-book" element={<AddBook />} />
                <Route path="books/borrow-book" element={<BookBorrow />} />
                <Route
                  path="books/book-borrowers"
                  element={<BorrowersList />}
                />
                <Route path="books/settings" element={<p>Settings</p>} />
                {/*  */}
                <Route path="programming-languages" element={<BookList />} />
                <Route
                  path="software-development"
                  element={<h1>software-development</h1>}
                />
                <Route
                  path="computer-science"
                  element={<h1>computer-science</h1>}
                />
                <Route
                  path="web-development"
                  element={<h1>web-development</h1>}
                />
                <Route
                  path="database-management"
                  element={<h1>database-management</h1>}
                />
                <Route
                  path="artificial-intelligence"
                  element={<h1>artificial-intelligence</h1>}
                />
                <Route path="cybersecurity" element={<h1>cybersecurity</h1>} />
                <Route
                  path="computer-graphics"
                  element={<h1>computer-graphics</h1>}
                />
                <Route path="networking" element={<h1>networking</h1>} />
                <Route
                  path="operating-systems"
                  element={<h1>operating-systems</h1>}
                />
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
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
