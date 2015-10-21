import React, { Component } from 'react'
import Typist from 'react-typist'

let styles = {
  marginBottom: '0px',
  marginTop: '10px',
  fontWeight: 100,
  letterSpacing: 0.5,
  display: 'block',
  width: '100%'
}

class Header extends Component {
  constructor() {
    super()
    this.state = {
      showSkills:false
    }
  }

  _renderSkills = () => {
    if (!this.state.showSkills) {
      return null
    }
    return (
      <div>
        <ul>
          <Typist cursor={{show:false}}>
            <li>System Architecture Design</li>
            <li>Developer Experience</li>
            <li>WordPress</li>
            <li>React</li>
            <li>Webpack</li>
          </Typist>
        </ul>
      </div>
    )
  }

  render() {
    return <div>
      <Typist
        cursor={{show:false}}
        onTypingDone={this.setState.bind(this, {showSkills:true})}
      >
        <h1 style={styles}>Jonathon Sherrard</h1>
        <h2 style={styles}>Lead Developer</h2>
        <p>Enjoys: Simple servers, functional & futuristic frontend.</p>
        <p>(And alliteration)</p>
        <p>Fairly good at:</p>
      </Typist>
      {this._renderSkills()}
    </div>
  }
}

export default Header
