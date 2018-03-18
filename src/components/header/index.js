import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

  static path = '/';

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">Brand</a>
          </div>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>

        </div>
      </nav>
    );
  }
}

