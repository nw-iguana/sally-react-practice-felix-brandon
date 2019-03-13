import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <address>
          <h2>Contact Info</h2>
          <h3>Sally Salvatore</h3>
          <p>Email: <a href="mailto:sssssssssssalvatore@serpentsunited.com">sssssssssssalvatore@serpentsunited.com</a></p>
          <p>Phone: 123-098-7654</p>
          <img src="http://static.hogwartsishere.com/media/profile_photos/avril_lavigne_slytherin_by_phoenixfate-d764h39.jpg"
          alt="Picture of Sally Salvatore wearing Slytherin attire." height="355" width="270" />
        </address>
      </div>
    );
  }
}

class Education extends Component {
  render() {
    return (
      <section role="region">
        <h2>Education</h2>
        <ul>
          <li>M.S. Florida Southern College - 2016-2018</li>
          <li>B.S. Coker College - 2011-2016</li>
        </ul>
      </section>
    );
  }
}

class Work extends Component {
  render() {
    return (
      <section role="region">
        <h2>Employment</h2>
        <ul>
          <li>Exotic Leathers LLC
              <p>Materials Sourcing Agent</p>
              <p><i>Jul 2016 to Now</i></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </li>
          <li>SnakeBytesTV
              <p>Snake Wrangler</p>
              <p><i>Nov 2012 to Mar 2016</i></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </li>      
        </ul>
      </section>
    )
  }
}
export {
  Contact,
  Education,
  Work,
}
// export default Education;
