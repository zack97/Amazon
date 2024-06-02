// App.jsx

import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";

const Home = lazy(() => import("./components/Home"));

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS =>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Home />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
