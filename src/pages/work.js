import React, { Component } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router'

import SBPhoto from '../../public/StockBoard.png'
import YDLPhoto from '../../public/YDL.png'
import SSPhoto from '../../public/ShowStubs.png'
import BAPPhoto from '../../public/BeAPhotographer.png'

class Work extends Component {
  render() {
    return (
      <div className="avenir">
          <Header />
          <div className='vh-100 w-100 flex items-center justify-center'>
            <div className={"vh60 mw6"}>
              <div className="fl w-100 w-50-ns pa3">
                <Link to="/stockboard">
                  <img className="w-100 db center dim" src={SBPhoto}/>
                </Link>
              </div>
              <div className="fl w-100 w-50-ns pa3">
                <Link to="/bap">
                  <img className="w-100 db center dim" src={BAPPhoto}/>
                </Link>
              </div>
              <div className="fl w-100 w-50-ns pa3">
                <Link to="/ydl">
                  <img className="w-100 db center dim" src={YDLPhoto}/>
                </Link>
              </div>
              <div className="fl w-100 w-50-ns pa3">
                <Link to="/showstubs">
                  <img className="w-100 db center dim" src={SSPhoto}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Work;
