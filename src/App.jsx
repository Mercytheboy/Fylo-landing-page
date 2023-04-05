import React from "react";
import "./App.css";
import Features from "./containers/features/Features";
import Work from "./containers/work/Work";
import Testimonials from "./containers/testimonials/Testimonials";
import Footer from "./containers/footer/Footer";
import Intro from "./containers/intro/Intro";

function App() {
  return (
    <div>
      <Intro />
      <Features />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
