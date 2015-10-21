import React, { Component } from 'react'
let styles = {
  color: '#00CC00'
}
class Social extends Component {
  render() {
    return (
      <div>
        <a style={styles} href="http://twitter.com/jshez">Twitter</a>
        <span> | </span>
        <a style={styles} href="mailto:j+site@andthats.it">Mail</a>
        <span> | </span>
        <a style={styles} href="http://github.com/jonsherrard">GitHub</a>
        <hr style={{borderColor: styles.color}}/>
      </div>
    )
  }
}

export default Social
