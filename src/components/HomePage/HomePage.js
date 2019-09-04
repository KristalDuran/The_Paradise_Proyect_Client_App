/**
 * Filename: HomePage.js
 * Author: email
 * Date: 
 * Description: Home page component 
 */
import React from 'react';
import './styles.scss'
import Form from './../Form/index'
import Header from './../Header/index'
import Footer from './../Footer/index';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="home">
        HomePage
        <Form></Form>
        {/*<Header></Header>*/}
        <p>HomePage</p>
        {/*<Footer></Footer> */}
      </div>
    )
  }
}

export default (HomePage);