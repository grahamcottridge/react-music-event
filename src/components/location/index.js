import React from 'react';

const Location = () => {
    return (

        <div className="location-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.6100919658975!2d-0.14526668422887484!3d51.53871097964016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b1031c8b613%3A0xed0ef5309b256a70!2sJazz+Caf%C3%A9!5e0!3m2!1sen!2suk!4v1536692278547"
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


