import React, { Component } from 'react';
import editorIMG from '../../public/editor-header.png'
import Header from '../components/Header'
import Typist from 'react-typist'
import './home.css';

const firstLine = `do {`
const secondLine = `try everything()`
const thirdLine = `} catch {`
const fourthLine = `print(“There is only try, and try harder.”)`
const fifthLine = `}`

class Home extends Component {
  render() {
    return (
      <div className="avenir">
        <Header />
        <div className='vh-100 w-100 flex'>
          <div className="w-100 tc self-center">
            <div className={"bg-console dib br3 shadow-4 mh3"}>
              <img src={editorIMG} />
              <div className="pl3 pv3 w-100 h5 courier fw1 tl white">
                <Typist className="dib lh-copy" cursor={{show:true, blink: true, element: '_'}} startDelay={1500}>
                  {firstLine} <br />
                  &nbsp;&nbsp;{secondLine} <br />
                  {thirdLine} <br />
                  &nbsp;&nbsp;{fourthLine} <br />
                  {fifthLine} <br />
                </Typist>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
