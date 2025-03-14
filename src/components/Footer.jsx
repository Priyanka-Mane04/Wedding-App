// import React from 'react';

// function Footer() {
//     return (
//         <footer>
          
//             {/* Footer Start */}
//             <div className="container-fluid bg-dark text-white py-5" id="contact" style={{ marginTop: "90px" }}>
//                 <div className="container text-center py-5">
//                     <div className="section-title position-relative text-center">
//                         <h1 className="font-secondary display-3 text-white">Thank You</h1>
//                         <i className="far fa-heart text-white"></i>
//                     </div>
//                     <div className="d-flex justify-content-center mb-4">
//                         <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
//                         <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
//                         <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
//                         <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
//                     </div>
//                     <div className="d-flex justify-content-center py-2">
//                         <p className="text-white">info@example.com</p>
//                         <span className="px-3">|</span>
//                         <p className="text-white">+012 345 6789</p>
//                     </div>
//                     <p className="m-0">&copy; <a className="text-primary" href="#">Domain Name</a>. Designed by <a className="text-primary" href="#">#</a></p>
//                 </div>
//             </div>

//             {/* Footer End */}

            
//         </footer>
//     );
// }

// export default Footer;



//new code using iframe


// import React, { useState } from 'react';

// function Footer() {
//     const [isChatOpen, setIsChatOpen] = useState(false);

//     return (
//         <>
//             <footer>
//                 {/* Footer Start */}
//                 <div className="container-fluid bg-dark text-white py-5" id="contact" style={{ marginTop: "90px" }}>
//                     <div className="container text-center py-5">
//                         <div className="section-title position-relative text-center">
//                             <h1 className="font-secondary display-3 text-white">Thank You</h1>
//                             <i className="far fa-heart text-white"></i>
//                         </div>
//                         <div className="d-flex justify-content-center mb-4">
//                             <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
//                             <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
//                             <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
//                             <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
//                         </div>
//                         <div className="d-flex justify-content-center py-2">
//                             <p className="text-white">info@example.com</p>
//                             <span className="px-3">|</span>
//                             <p className="text-white">+012 345 6789</p>
//                         </div>
//                         <p className="m-0">&copy; <a className="text-primary" href="#">Domain Name</a>. Designed by <a className="text-primary" href="#">#</a></p>
//                     </div>
//                 </div>
//                 {/* Footer End */}

//                 {/* Chat Support Button */}
//                 <button className="chat-btn" onClick={() => setIsChatOpen(true)}>
//                     💬 Chat Support
//                 </button>

//                 {/* Chat App Modal */}
//                 {isChatOpen && (
//                     <div className="chat-modal">
//                         <div className="chat-content">
//                             <button className="close-btn" onClick={() => setIsChatOpen(false)}>✖</button>
//                             <iframe 
//                                 src="https://chatt-app-oq7w.onrender.com/" 
//                                 title="Chat Support"
//                                 className="chat-frame"
//                             ></iframe>
//                         </div>
//                     </div>
//                 )}

//                 {/* Chat Button & Modal CSS */}
//                 <style>
//                     {`
//                     .chat-btn {
//                         position: fixed;
//                         bottom: 20px;
//                         right: 20px;
//                         background: #007bff;
//                         color: white;
//                         border: none;
//                         padding: 12px 20px;
//                         font-size: 16px;
//                         border-radius: 30px;
//                         cursor: pointer;
//                         box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
//                         transition: background 0.3s ease;
//                     }

//                     .chat-btn:hover {
//                         background: #0056b3;
//                     }

//                     .chat-modal {
//                         position: fixed;
//                         top: 0;
//                         left: 0;
//                         width: 100%;
//                         height: 100%;
//                         background: rgba(0, 0, 0, 0.5);
//                         display: flex;
//                         justify-content: flex-end;  /* Aligns chat modal to the right */
//                         align-items: center;
//                         z-index: 1000;
//                         padding-right: 20px; /* Adds spacing from the right edge */
//                     }

//                     .chat-content {
//                         width: 400px;
//                         height: 500px;
//                         background: white;
//                         border-radius: 10px;
//                         position: relative;
//                         display: flex;
//                         flex-direction: column;
//                         box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//                     }

//                     .chat-frame {
//                         width: 100%;
//                         height: 100%;
//                         border: none;
//                     }

//                     .close-btn {
//                         position: absolute;
//                         top: 10px;
//                         right: 10px;
//                         background: red;
//                         color: white;
//                         border: none;
//                         border-radius: 50%;
//                         width: 30px;
//                         height: 30px;
//                         cursor: pointer;
//                         font-size: 16px;
//                     }
//                     `}
//                 </style>
//             </footer>
//         </>
//     );
// }

// export default Footer;


//New code-3 using alert chatt-app

import React from 'react';

function Footer() {
    const openChatWindow = () => {
        const chatUrl = "https://chatt-app-oq7w.onrender.com/";
        const chatWindow = window.open(
            chatUrl, 
            "ChatSupport", 
            "width=400,height=600,left=1000,top=100"
        );
        if (!chatWindow) {
            alert("Popup blocked! Please allow popups for this site.");
        }
    };

    return (
        <>
            <footer>
                {/* Footer Start */}
                <div className="container-fluid bg-dark text-white py-5" id="contact" style={{ marginTop: "90px" }}>
                    <div className="container text-center py-5">
                        <div className="section-title position-relative text-center">
                            <h1 className="font-secondary display-3 text-white">Thank You</h1>
                            <i className="far fa-heart text-white"></i>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="d-flex justify-content-center py-2">
                            <p className="text-white">info@example.com</p>
                            <span className="px-3">|</span>
                            <p className="text-white">+012 345 6789</p>
                        </div>
                        <p className="m-0">&copy; <a className="text-primary" href="#">Domain Name</a>. Designed by <a className="text-primary" href="#">#</a></p>
                    </div>
                </div>
                {/* Footer End */}

                {/* Chat Support Button */}
                <button className="chat-btn" onClick={openChatWindow}>
                    💬 Chat Support
                </button>

                {/* Chat Button CSS */}
                <style>
                    {`
                    .chat-btn {
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        background: #007bff;
                        color: white;
                        border: none;
                        padding: 12px 20px;
                        font-size: 16px;
                        border-radius: 30px;
                        cursor: pointer;
                        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
                        transition: background 0.3s ease;
                    }

                    .chat-btn:hover {
                        background: #0056b3;
                    }
                    `}
                </style>
            </footer>
        </>
    );
}

export default Footer;

