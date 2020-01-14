import React, { Component } from 'react'
import Bot from '../bot.png'
export class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <b>
          Welcome
          </b>
        <div style={{ float: "right" }}>
          <img src={Bot} alt="Chat Bot" />
        </div>
      </div>
    )
  }
}

export default Home
