import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { GlobalStyles } from "./App.Styled";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/selected";
import { setUser } from "../store/slices/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import IsLoading from "../components/IsLoading/IsLoading";

const Home = React.lazy(() => import("../pages/Home/Home"));
const Teachers = React.lazy(() => import("../pages/Teachers/Teachers"));
const Favorites = React.lazy(() => import("../pages/Favorites/Favorites"));

function App() {
  const location = useLocation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsLoading(true);
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            setUser({
              user: {
                email: user.email,
                id: user.uid,
                name: user.displayName,
              },
              token: user.accessToken,
            })
          );
        } else {
          toast.info("User is signed out");
        }
        setIsLoading(false);
      });
    }
  }, [dispatch, user]);

  const isHomePage = location.pathname === "/";

  return (
    <>
      <>{isLoading && <IsLoading />}</>
      <GlobalStyles isHomePage={isHomePage} />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<IsLoading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/teachers"
            element={
              <Suspense fallback={<IsLoading />}>
                <Teachers />
              </Suspense>
            }
          />
          {user && (
            <Route
              path="/favorites"
              element={
                <Suspense fallback={<IsLoading />}>
                  <Favorites />
                </Suspense>
              }
            />
          )}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
