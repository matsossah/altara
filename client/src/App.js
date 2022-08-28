import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./containers/Home";
import Books from "./containers/Books";
import Coaching from "./containers/Coaching";
import Community from "./containers/Community";
import Checkout from "./containers/Checkout";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-W7LZ8PG'
}

TagManager.initialize(tagManagerArgs)

export default function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/coaching" element={<Coaching />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
