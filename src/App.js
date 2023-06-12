import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
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
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import ThreeRouter from "./ThreeRouter.js";
import { history } from "./History.js";

const App = () => {
  return (
    <ThreeRouter history={history}>
      <div className="App" style={{ width: "100vw", height: "100vh" }}>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day1" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
          <Route path="/day3" element={<Day3 />} />
          <Route path="/day4" element={<Day4 />} />
          <Route path="/day5" element={<Day5 />} />
          <Route path="/day6" element={<Day6 />} />
          <Route path="/day7" element={<Day7 />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </div>
    </ThreeRouter>
  );
};

export default App;
