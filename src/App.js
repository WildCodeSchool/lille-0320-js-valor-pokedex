import React from "react";
import Header from "./components/header-footer-bandeau/Header";
import Footer from "./components/header-footer-bandeau/Footer";
import Bandeau from "./components/header-footer-bandeau/Bandeau";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Bandeau />
      </main>
      <Footer />
    </div>
  );
}

export default App;
