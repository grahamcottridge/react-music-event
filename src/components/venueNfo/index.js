import React from "react";
import Zoom from "react-reveal/Zoom";
import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

const VenueNfo = () => {
  return (
    <div className="bck-black">
      <div className="centre-wrapper">
        <div className="vn-wrapper">
          <Zoom duration={500}>
            <div className="vn-item">
              <div className="vn-outer">
                <div className="vn-inner">
                  <div className="vn-icon-square bck-red"></div>
                  <div
                    className="vn-icon"
                    style={{
                      background: `url(${icon_calendar})`
                    }}
                  ></div>
                  <div className="vn-title">Event Date & Time</div>
                  <div className="vn-desc">20 Sept 2018 @8.00pm</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn-item">
              <div className="vn-outer">
                <div className="vn-inner">
                  <div className="vn-icon-square bck-yellow"></div>
                  <div
                    className="vn-icon"
                    style={{
                      background: `url(${icon_location})`
                    }}
                  ></div>
                  <div className="vn-title">Event Location</div>
                  <div className="vn-desc">
                    Jazz Cafe <div>London</div>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNfo;
