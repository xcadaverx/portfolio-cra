import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="absolute bg-white w-100">
          <nav className={`dt w-100 border-box pa3 ph4-ns pv3-ns pv3 vh10`}>
            <Link to="/" className="dtc v-mid black fw6 f4 tracked-tight link dim" title="Home">
                Daniel Williams
            </Link>
            <div className="dtc v-mid w-75 tr">
              <Link to="/self" className="link black-40 tracked underline-hover hover-black f6 f6-ns dib mr3 mr4-ns" title="Self">Self</Link>
              <Link to="/work" className="link black-40 tracked underline-hover hover-black f6 f6-ns dib mr3 mr4-ns" title="Work">Work</Link>
              <a href="http://www.medium.com/@xcadaverx" className="link black-40 tracked underline-hover hover-black f6 f6-ns dib mr3 mr4-ns" title="Blog">Blog</a>
              <a href="mailto:xcadaverx@gmail.com" className="link black-40 tracked underline-hover hover-black f6 f6-ns dib" title="Contact">Contact</a>
            </div>
          </nav>
        </div>
    );
  }
}

export default Header;
