// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Gallery from "./components/Gallery";
// import Rsvp from "./components/Rsvp";
// import Story from "./components/Story";
// import About from "./components/About";
// import Family from "./components/Family";
// import Contact from "./components/Contact";
// import Event from "./components/Event";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/story" element={<Story />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/family" element={<Family />} />
//         <Route path="/event" element={<Event />} />
//         <Route path="/rsvp" element={<Rsvp />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;


//new code
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Rsvp from "./components/Rsvp";
import Story from "./components/Story";
import About from "./components/About";
import Family from "./components/Family";
import Contact from "./components/Contact";
import Event from "./components/Event";




function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Story />
      <Gallery />
      <Family />
      <Event />
      <Rsvp />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
