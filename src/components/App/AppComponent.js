import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class AppComponent extends Component {
  constructor (props) {
    super(props)

    this.handleBar = this.handleBar.bind(this)
  }

  handleBar (e) {
    const { setBar } = this.props

    e.preventDefault()

    setBar('new bar value')
  }

  render () {
    const { foo, bar } = this.props
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            foo = {foo}
          </p>
          <p>
            bar = {bar}
          </p>
          <p>
            <a onClick={this.handleBar} href={'/'}>Set bar to 'new bar value'</a>
          </p>
        </header>
      </div>
    )
  }
}

export default AppComponent
