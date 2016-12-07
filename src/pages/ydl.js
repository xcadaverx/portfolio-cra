import React, { Component } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router'

import Gallery from '../components/Gallery'

import ss1 from '../../public/ydl/ydl-ss-1.jpg'
import ss2 from '../../public/ydl/ydl-ss-2.jpg'
import ss3 from '../../public/ydl/ydl-ss-3.jpg'
import ss4 from '../../public/ydl/ydl-ss-4.jpg'

import tn1 from '../../public/ydl/ydl-tn-1.png'
import tn2 from '../../public/ydl/ydl-tn-2.png'
import tn3 from '../../public/ydl/ydl-tn-3.png'
import tn4 from '../../public/ydl/ydl-tn-4.png'

const DEFAULT_IMAGES = [
	{ url: ss1, tn: tn1, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
	{ url: ss2, tn: tn2, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
	{ url: ss3, tn: tn3, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
	{ url: ss4, tn: tn4, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

class YDL extends Component {
  render() {
    return (
      <div className="avenir">
      <Header />
      <div className='vh-100 w-100 flex items-center justify-center'>
        <div className="vh60 bg-white h-100">

					<div className="fl w-50-ns w-100 pa5 b--black h-100-ns flex-ns items-center-ns justify-end-ns">
	          <div className="tc mw24r">
	            <h3>YogiDoList</h3>
	            <p>YogiDoList is a social platform to track your yoga practice. You will start your journey by learning the basic poses that will help strengthen and prepare the body for a deeper practice. Persistance and perseverance are key aspects of yoga, so you must practice to maintain your rank. Each week you will be given more difficult poses than the last. The entire journey from beginner to expert spans over 300 weeks.</p>
	            <a className="link black-40 tracked underline-hover hover-black f6 mt3 f6-ns dib" href="http://www.YogiDoList.com">www.YogiDoList.com</a>
	          </div>
	        </div>
          <div className="fl w-50-ns w-100 pa4 bl-ns bw1 b--black h-100-ns h-50 flex-ns items-center-ns">
            <div className={"mw24r ml3-ns mb0-ns mb6"}>
              <Gallery images={DEFAULT_IMAGES.map(({ caption, url, tn, orientation, useForDemo }) => ({
                  src: url,
                  thumbnail: tn,
                  caption,
                  orientation,
                  useForDemo,
                }))} />
            </div>
          </div>

        </div>
      </div>
      </div>
    );
  }
}

export default YDL;
