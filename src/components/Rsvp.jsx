import React from 'react';

function Rsvp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("RSVP Submitted!"); // Replace with actual form handling logic
  };

  return (
    <div>
    
      
      {/* RSVP Start */}
      <div className="container-fluid py-5" id="rsvp">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: "3px" }}>RSVP</h6>
            <h1 className="font-secondary display-4">Join Our Party</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input 
                        type="text" 
                        className="form-control bg-secondary border-0 py-4 px-3" 
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input 
                        type="email" 
                        className="form-control bg-secondary border-0 py-4 px-3" 
                        placeholder="Your Email" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select className="form-control bg-secondary border-0" style={{ height: "52px" }} required>
                        <option value="">Number of Guests</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <select className="form-control bg-secondary border-0" style={{ height: "52px" }} required>
                        <option value="">I'm Attending</option>
                        <option>All Events</option>
                        <option>Wedding Party</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea 
                      className="form-control bg-secondary border-0 py-2 px-3" 
                      rows="5" 
                      placeholder="Message" 
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button className="btn btn-primary font-weight-bold py-3 px-5" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RSVP End */}
    </div>
  );
}

export default Rsvp;
