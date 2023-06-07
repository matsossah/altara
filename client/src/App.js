import React from "react";
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./containers/Home";
import Day1 from "./containers/Day1";
import Day2 from "./containers/Day2";
import Day3 from "./containers/Day3";
import Day4 from "./containers/Day4";
import Day5 from "./containers/Day5";
import Day6 from "./containers/Day6";
import Day7 from "./containers/Day7";
import Checkout from "./containers/Checkout";
import Confirmation from "./containers/Confirmation";

const App = () => {
  return (
  <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/day1" element={<Day1 />}></Route>
          <Route path="/day2" element={<Day2 />}></Route>
          <Route path="/day3" element={<Day3 />}></Route>
          <Route path="/day4" element={<Day4 />}></Route>
          <Route path="/day5" element={<Day5 />}></Route>
          <Route path="/day6" element={<Day6 />}></Route>
          <Route path="/day7" element={<Day7 />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;