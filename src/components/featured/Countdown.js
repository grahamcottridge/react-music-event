import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';


class Countdown extends Component {

  state = {
    deadline: 'Dec, 16, 2019',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if(time < 0) {
      console.log('over!')
    } else {
      const seconds = Math.floor((time/1000)%60)
      const minutes = Math.floor((time/1000/60)%60)
      const hours = Math.floor((time/(1000*60*60))%24);
      const days = Math.floor((time/(1000*60*60*24)));

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000)
  }

    render() {

      return (

        <Slide left delay={1000}>
          <div className="countdown-wrapper">
            <div className="countdown-top">
              Event starts in
            </div>
            <div className="countdown-bottom">
              <div className="countdown-item">
                <div className="countdown-time">
                  {this.state.days}
                </div>
                <div className="countdown-tag">
                  Days
                </div>
              </div>
              <div className="countdown-item">
                <div className="countdown-time">
                  {this.state.hours}
                </div>
                <div className="countdown-tag">
                  Hours
                </div>
              </div>
              <div className="countdown-item">
                <div className="countdown-time">
                  {this.state.minutes}
                </div>
                <div className="countdown-tag">
                  Minutes
                </div>
              </div>
              <div className="countdown-item">
                <div className="countdown-time">
                  {this.state.seconds}
                </div>
                <div className="countdown-tag">
                  Seconds
                </div>
              </div>
            </div>
          </div>
        </Slide>

      );
  };

}

export default Countdown;
