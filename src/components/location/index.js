import React from 'react';

const Location = () => {
    return (

        <div className="location-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4967.116597919018!2d-0.0009396718066558052!3d51.50297261853741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a81c5507b387%3A0x981ded0cf3b9dadf!2sThe+O2!5e0!3m2!1sen!2suk!4v1536686395904"
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen></iframe>

          <div className="location-tag">
            <div>Location</div>
          </div>

        </div>

    );
};

export default Location;
