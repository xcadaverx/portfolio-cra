import React, { Component } from 'react'
import Header from '../components/Header'

import Gallery from '../components/Gallery'

import ss1 from '../../public/ss/ss-ss-1.png'
import ss2 from '../../public/ss/ss-ss-2.png'
import ss3 from '../../public/ss/ss-ss-3.png'
import ss4 from '../../public/ss/ss-ss-4.png'

import tn1 from '../../public/ss/ss-tn-1.png'

const DEFAULT_IMAGES = [
	{ url: ss1, tn: tn1, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
	{ url: ss2, tn: tn1, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
	{ url: ss3, tn: tn1, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
	{ url: ss4, tn: tn1, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

class SS extends Component {
  render() {
    return (
      <div className="avenir">
      <Header />
      <div className='vh-100 w-100 flex items-center justify-center'>
        <div className="vh60 bg-white h-100">

					<div className="fl w-50-ns w-100 pa5 b--black h-100-ns flex-ns items-center-ns justify-end-ns">
	          <div className="tc mw24r">
	            <h3>ShowStubs TicketMailer</h3>
	            <p>ShowStubs TicketMailer is a private interface and back-end used to deliver information to all ShowStubs ticket purchasers. The application integrates a private login system to allow an administrator to input custom information pertaining to a particular Shopify item. When that Shopify item is purchased, ShowStubs TicketMailer will generate and email a PDF attachment to the user containing the custom information.</p>
	            <a className="link black-40 tracked underline-hover hover-black f6 mt3 f6-ns dib" href="http://www.ShowStubs.com">www.ShowStubs.com</a>
	          </div>
	        </div>
          <div className="fl w-50-ns w-100 pa4 bl-ns bw1 b--black h-100 flex-ns items-center-ns">
            <div className={"mw24r ml3-ns"}>
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

export default SS;
