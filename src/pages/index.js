import React, {Component} from "react"
import "../styles/index.scss"

import Layout from "../components/layout"
import Head from "../components/head"
import HomeContent from "../components/home"
let workContent = require('../components/workContent');

class HomePage extends Component {
  constructor(props) {
    super(props) 
    this.state = {
        homeImages: workContent.homeLib,
        landingWork: workContent.homeLib[this.rand()]
    };
  }

  rand(maxLimit = workContent.paintLib.length) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
  }

  render(){
    return(
        <Layout>
          <Head title="Home" />
          <HomeContent
            landingWork={this.state.landingWork}
            homeImages={this.state.homeImages}
          />
        </Layout>
      )
  }
}

export default HomePage