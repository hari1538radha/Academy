import { Provider } from "react-redux";
import store from "./Store/Store/Store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Signup from "../src/component/Signup/Signup";
import Landing from "../src/component/Landing/Landing.js";
import Quiz from './component/Quiz/quiz';
import { BrowserRouter, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} exact></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
