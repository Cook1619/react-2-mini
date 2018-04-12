import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this)
  }

  updateText(element) {
    this.setState({
      text: element.target.value
    })
  }

  render() {
    console.log(this.props.fontColor,this.props.fontFamily,this.props.fontSize)
    return (
      <div className="textContainer">
        <textarea
          style={{ color: this.props.fontColor, fontFamily: this.props.fontFamily, fontSize: this.props.fontSize }}
          onChange={this.updateText}
          value={this.state.text}
          placeholder='This is where your text will be!'
          cols="90"
          rows="30">
          
        </textarea>
      </div>
    )
  }
}




