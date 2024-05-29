import { createContext, useContext, useReducer, useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// const BASE_URL = "http://localhost:4001/api/v1/auth";
const BASE_URL = "https://library-stock.onrender.com/api/v1/auth";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("accessToken"),
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
};

function reducer(state, action) {
  switch (action.type) {
    case "createAccount":
      return { ...state, user: action.payload };

    case "login":
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        accessToken: action.payload.jwt,
        refreshToken: action.payload.refreshToken,
      };

    case "logout":
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [{ user, isAuthenticated, accessToken }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  async function createAccount(data) {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        dispatch({ type: "createAccount", payload: result.data });
        toast.success(result.statusText || "Login successful!");
        navigate("/login");
      } else {
        toast.error(
          result.msg ||
            result.error ||
            result.message ||
            "An error occurred. Please try again.",
        );
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function login(data) {
    console.log(data);
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        const { jwt, refreshToken, user } = result;
        localStorage.setItem("accessToken", jwt);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({ type: "login", payload: result });
        toast.success(result.statusText || "Login successful!");
      } else {
        toast.error(
          result.msg ||
            result.error ||
            result.message ||
            "An error occurred. Please try again.",
        );
      }
    } catch (error) {
      toast.error(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    dispatch({ type: "logout" });
    toast.success("Logout successful!");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        accessToken,
        dispatch,
        loading,
        setLoading,
        logout,
        createAccount,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was use outside the auth provider");
  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
