import React, { Component } from 'react'
import Header from './header'
import Social from './social'

let styles = {
  boxSizing: 'border-box',
  fontFamily: 'Courier',
  color: '#00CC00',
  background: 'black',
  padding: '20px',
  minHeight: '100%',
  lineHeight: 1.58
}

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Social />
        <Header />
      </div>
    )
  }
}

export default App
