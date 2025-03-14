import React from 'react';

function Story() {
  return (
    <div>
      {/* Story Start */}
      <div className="container-fluid py-5" id="story">
        <div className="container pt-5 pb-3">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: "3px" }}>Story</h6>
            <h1 className="font-secondary display-4">Our Love Story</h1>
            <i className="far fa-heart text-dark"></i>
          </div>

          <div className="container timeline position-relative p-0">
            {/* First Meet */}
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <img className="img-fluid mr-md-3" src="/assets/img/story-1.jpg" alt="First Meet" />
              </div>
              <div className="col-md-6 text-center text-md-left">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                  <h4 className="mb-2">First Meet</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ipsum eu libero placerat tincidunt.</p>
                </div>
              </div>
            </div>

            {/* First Date */}
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                  <h4 className="mb-2">First Date</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ipsum eu libero placerat tincidunt.</p>
                </div>
              </div>
              <div className="col-md-6 text-center text-md-left">
                <img className="img-fluid ml-md-3" src="/assets/img/story-2.jpg" alt="First Date" />
              </div>
            </div>

            {/* Proposal */}
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <img className="img-fluid mr-md-3" src="/assets/img/story-3.jpg" alt="Proposal" />
              </div>
              <div className="col-md-6 text-center text-md-left">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                  <h4 className="mb-2">Proposal</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ipsum eu libero placerat tincidunt.</p>
                </div>
              </div>
            </div>

            {/* Engagement */}
            <div className="row">
              <div className="col-md-6 text-center text-md-right">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                  <h4 className="mb-2">Engagement</h4>
                  <p className="text-uppercase mb-2">01 Jan 2050</p>
                  <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ipsum eu libero placerat tincidunt.</p>
                </div>
              </div>
              <div className="col-md-6 text-center text-md-left">
                <img className="img-fluid ml-md-3" src="/assets/img/story-4.jpg" alt="Engagement" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Story End */}
    </div>
  );
}

export default Story;
