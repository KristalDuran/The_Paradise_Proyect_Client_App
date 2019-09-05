/**
 * Filename: HomePage.js
 * Author: email
 * Date: 
 * Description: Home page component 
 */
import React from 'react';
import './styles.scss'
import Header from './../Header/index'
import Footer from './../Footer/index';
import QuienesSomos from '../QuienesSomos';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="home">
        <Header></Header>
        <p>HomePage</p>
        <QuienesSomos></QuienesSomos>
        <Footer></Footer>
      </div>
    )
  }
}

export default (HomePage);