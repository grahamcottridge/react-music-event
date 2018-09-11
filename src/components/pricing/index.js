import React, { Component } from 'react';
import MyButton from '../utilities/MyButton'

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state ={
    prices: [25, 50, 75],
    positions: ['Standard', 'Balcony', 'VIP'],
    desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    ],
    linkto: ['https://sales/b', 'https://sales/m', 'https://sales/s'],
    delay: [500, 0, 500]
  }

  showBoxes = () => (
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing-item">
          <div className="pricing-inner-wrapper">
            <div className="pricing-title">
              <span>£{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing-description">
              {this.state.desc[i]}
            </div>
            <div className="pricing-buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )

  render() {
    return (
      <div className="bck-black">
        <div className="center-wrapper pricing-section">
          <h2>Pricing</h2>
          <div className="pricing-wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;

