/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { AllFiles } from "./pages/AllFiles";
import { Archived } from "./pages/Archived";
import { Starred } from "./pages/Starred";

import reportWebVitals from "./reportWebVitals";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all_files" element={<AllFiles />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="/archived" element={<Archived />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
