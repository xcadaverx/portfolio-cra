import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Home from './pages/home'
import Self from './pages/self'
import Work from './pages/work'
import YDL from './pages/ydl'
import StockBoard from './pages/sb'
import ShowStubs from './pages/ss'
import BAP from './pages/bap'

import './index.css'

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/self" component={Self}/>
    <Route path="/work" component={Work}/>
    <Route path="/ydl" component={YDL}/>
    <Route path="/stockboard" component={StockBoard}/>
    <Route path="/bap" component={BAP}/>
    <Route path="/showstubs" component={ShowStubs}/>
  </Router>,
  document.getElementById('root')
)
