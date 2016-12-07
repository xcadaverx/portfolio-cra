import React, { Component } from 'react'
import Header from '../components/Header'

import Gallery from '../components/Gallery'

import ss1 from '../../public/bap/bap-ss-1.png'
import ss2 from '../../public/bap/bap-ss-2.png'
import ss3 from '../../public/bap/bap-ss-3.png'
import ss4 from '../../public/bap/bap-ss-4.png'

import tn1 from '../../public/bap/bap-tn-1.png'
import tn2 from '../../public/bap/bap-tn-2.png'
import tn3 from '../../public/bap/bap-tn-3.png'
import tn4 from '../../public/bap/bap-tn-4.png'

const DEFAULT_IMAGES = [
	{ url: ss1, tn: tn1, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
	{ url: ss2, tn: tn2, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
	{ url: ss3, tn: tn3, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
	{ url: ss4, tn: tn4, caption: '', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

class BAP extends Component {
  render() {
    return (
      <div className="avenir">
      <Header />
      <div className='vh-100 w-100 flex items-center justify-center'>
        <div className="vh60 bg-white h-100">

					<div className="fl w-50-ns w-100 pa5 b--black h-100-ns flex-ns items-center-ns justify-end-ns">
						<div className="tc mw24r">
							<h3>Be A Photographer</h3>
							<p>Be A Photographer is an iOS application made for professional photographers to take part in themed challenges. Users can comment, vote, and submit photos from other users for badges and other prizes.</p>
							<a className="link black-40 tracked underline-hover hover-black f6 mt3 f6-ns dib" href="http://www.BeAPhotographerApp.com">www.BeAPhotographerApp.com</a>
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

export default BAP;
