import React, { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import Catalogue from "../screens/Catalogue";
import Apartment from "../components/ApartmentDetail";
import Wishlist from "../screens/Wishlist";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";

const HomeRouter: FC = () => {
  return (
    <div className="containerxx">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          }
        />
        ,
        <Route
          path="/apartments"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Catalogue />
            </Suspense>
          }
        />
        ,
        <Route
          path="/apartments/:id"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Apartment />
            </Suspense>
          }
        />
        ,
        <Route
          path="/wishlist"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Wishlist />
            </Suspense>
          }
        />
        ,
        <Route
          path="/wishlist/:id"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Apartment />
            </Suspense>
          }
        />
        ,
        <Route
          path="/notification"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Notification />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Profile />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default HomeRouter;
