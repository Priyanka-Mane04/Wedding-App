// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Scroll Spy Div (Optional, if needed) */}
//       <div data-spy="scroll" data-target=".navbar" data-offset="51"></div>

//       <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
//         {/* Mobile Logo */}
//         <Link to="/" className="navbar-brand d-block d-lg-none">
//           <h1 className="font-secondary text-white mb-n2">
//             Jack <span className="text-primary">&</span> Rose
//           </h1>
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           className="navbar-toggler"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-controls="navbarCollapse"
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Links */}
//         <div className={`collapse navbar-collapse justify-content-between ${isOpen ? "show" : ""}`} id="navbarCollapse">
//           <div className="navbar-nav ml-auto py-0">
//             <Link to="/" className="nav-item nav-link active" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link to="/about" className="nav-item nav-link" onClick={() => setIsOpen(false)}>About</Link>
//             <Link to="/story" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Story</Link>
//             <Link to="/gallery" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Gallery</Link>
//           </div>

//           {/* Center Logo for Large Screens */}
//           <Link to="/" className="navbar-brand mx-5 d-none d-lg-block">
//             <h1 className="font-secondary text-white mb-n2">
//               Jack <span className="text-primary">&</span> Rose
//             </h1>
//           </Link>

//           <div className="navbar-nav mr-auto py-0">
//             <Link to="/family" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Family</Link>
//             <Link to="/event" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Event</Link>
//             <Link to="/rsvp" className="nav-item nav-link" onClick={() => setIsOpen(false)}>RSVP</Link>
//             <Link to="/contact" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

//New code 2 adding chat app

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isChatOpen, setIsChatOpen] = useState(false); // State for chat window

//   return (
//     <>
//     <h1>Navbar</h1>
//      <div data-spy="scroll" data-target=".navbar" data-offset="51"></div>

//       <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
//         <Link to="/" className="navbar-brand d-block d-lg-none">
//           <h1 className="font-secondary text-white mb-n2">
//             Jack <span className="text-primary">&</span> Rose
//           </h1>
//         </Link>

//         <button
//           type="button"
//           className="navbar-toggler"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-controls="navbarCollapse"
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className={`collapse navbar-collapse justify-content-between ${isOpen ? "show" : ""}`} id="navbarCollapse">
//           <div className="navbar-nav ml-auto py-0">
//             <Link to="/" className="nav-item nav-link active" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link to="/about" className="nav-item nav-link" onClick={() => setIsOpen(false)}>About</Link>
//             <Link to="/story" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Story</Link>
//             <Link to="/gallery" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Gallery</Link>
//           </div>

//           <Link to="/" className="navbar-brand mx-5 d-none d-lg-block">
//             <h1 className="font-secondary text-white mb-n2">
//               Jack <span className="text-primary">&</span> Rose
//             </h1>
//           </Link>

//           <div className="navbar-nav mr-auto py-0">
//             <Link to="/family" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Family</Link>
//             <Link to="/event" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Event</Link>
//             <Link to="/rsvp" className="nav-item nav-link" onClick={() => setIsOpen(false)}>RSVP</Link>
//             <Link to="/contact" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
//           </div>

//           {/* Chat Support Button */}
//           <button className="btn btn-primary ml-3" onClick={() => setIsChatOpen(true)}>
//             Chat Support!
//           </button>
//         </div>
//       </nav>

//       {/* Chat App Modal */}
//       {isChatOpen && (
//         <div className="chat-modal">
//           <div className="chat-content">
//             <button className="close-btn" onClick={() => setIsChatOpen(false)}>✖</button>
//             <iframe 
//               src="https://chatt-app-oq7w.onrender.com/" 
//               title="Chat Support"
//               className="chat-frame"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {/* Chat Modal CSS */}
//       <style>
//         {`
//           .chat-modal {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: rgba(0, 0, 0, 0.5);
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             z-index: 1000;
//           }

//           .chat-content {
//             width: 400px;
//             height: 500px;
//             background: white;
//             border-radius: 10px;
//             position: relative;
//             display: flex;
//             flex-direction: column;
//           }

//           .chat-frame {
//             width: 100%;
//             height: 100%;
//             border: none;
//           }

//           .close-btn {
//             position: absolute;
//             top: 10px;
//             right: 10px;
//             background: red;
//             color: white;
//             border: none;
//             border-radius: 50%;
//             width: 30px;
//             height: 30px;
//             cursor: pointer;
//             font-size: 16px;
//           }
//         `}
//       </style>
//     </>
//   );
// }

// export default Navbar;


//new code 3 adding component in single page

import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //const [isChatOpen, setIsChatOpen] = useState(false); // State for chat window

  return (
    <>
      <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
        <a href="#home" className="navbar-brand d-block d-lg-none">
          <h1 className="font-secondary text-white mb-n2">
            Jack <span className="text-primary">&</span> Rose
          </h1>
        </a>

        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarCollapse"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-between ${isOpen ? "show" : ""}`} id="navbarCollapse">
          <div className="navbar-nav ml-auto py-0">
            <a href="#home" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="nav-item nav-link" onClick={() => setIsOpen(false)}>About</a>
            <a href="#story" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Story</a>
            <a href="#gallery" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Gallery</a>
          </div>

          <a href="#home" className="navbar-brand mx-5 d-none d-lg-block">
            <h1 className="font-secondary text-white mb-n2">
              Jack <span className="text-primary">&</span> Rose
            </h1>
          </a>

          <div className="navbar-nav mr-auto py-0">
            <a href="#family" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Family</a>
            <a href="#event" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Event</a>
            <a href="#rsvp" className="nav-item nav-link" onClick={() => setIsOpen(false)}>RSVP</a>
            <a href="#contact" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          </div>

      
        </div>
      </nav>

    </>
  );
}

export default Navbar;
