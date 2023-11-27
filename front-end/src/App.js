import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Currencies from "./pages/Currencies";
import AddCurrency from "./Actions/AddCurrency";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditCurrency from "./Actions/EditCurrency";
import Rates from "./pages/Rates";
import AddRate from "./Actions/AddRate";
import React from "react";
import Exchange from "./pages/Exchange";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route
            exact
            path="/currencies/addCurrency"
            element={<AddCurrency />}
          />
          <Route
            exact
            path="/currencies/editCurrency/:id"
            element={<EditCurrency />}
          />
          <Route exact path="/rates" element={<Rates />} />
          <Route exact path="/rates/add" element={<AddRate />} />
          <Route exact path="/exchange" element={<Exchange />} />
          <Route exact path="/currencies/show" element={<Currencies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
