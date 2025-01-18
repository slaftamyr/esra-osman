import React from "react";
import Header from "./components/Header";
import About from "./components/About";
 
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Activities from "./components/Activities";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-pink-50 text-gray-800">
      <Header />
      <main>
        <About />
       
        <Experience />
        <Skills />
        <Activities />
      </main>
      <Footer />
    </div>
  );
}

export default App;
