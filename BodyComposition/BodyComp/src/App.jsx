// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavDesktop from "./components/sections/NavDesktop";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import CalorieCalculator from "./Pages/CalorieCalculator";
import GlobalStyle from "./globalStyles";
import Faqs from "./Pages/Faqs";
import Team from "./Pages/Team";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        {/* <NavDesktop /> */}
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CalorieCalculator" element={<CalorieCalculator />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/" exact element={<CalorieCalculator />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

// <div>
//       <CalorieCalculator />
//     </div>
