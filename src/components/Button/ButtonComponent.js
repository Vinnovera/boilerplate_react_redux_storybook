import React, { Component } from 'react'
import './Button.css'

class ButtonComponent extends Component {
  render () {
    const { buttonText, handleClick } = this.props
    return (
      <button
        onClick={handleClick}
        className='btn'
      >{buttonText} </button>
    )
  }
}

export default ButtonComponent
