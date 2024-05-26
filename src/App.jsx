import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Spinner from "./components/Spinners/Spinner";
import AllBooks from "./components/Books/AllBooks";

const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const MainApp = lazy(() => import("./pages/MainApp"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            {/* Add routes here */}
            <Route index element={<Home />} />
            {/* Auth routes */}
            <Route path="register" element={<Signup />} />
            <Route path="login" element={<Login />} />

            {/* Main dashboard */}
            <Route path="books" element={<MainApp />}>
              {/* All Categories of the books */}
              <Route index element={<AllBooks />} />
              <Route path="add-book" element={<p>Add a book</p>} />
              <Route path="borrow-book" element={<p>Borrow a book</p>} />
              <Route path="settings" element={<p>Settings</p>} />
              {/*  */}
              <Route
                path="books/programming-languages"
                element={<h1>Programming Languages</h1>}
              />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
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
    </>
  );
}

export default App;
