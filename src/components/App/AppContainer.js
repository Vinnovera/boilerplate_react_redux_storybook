import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppComponent from './AppComponent'
import { appSelectors, appOperations, appCreators } from './duck'

class AppContainer extends Component {
  componentDidMount () {
    this.props.fetchFoo()
  }

  render () {
    return <AppComponent {...this.props} />
  }
}

const mapStateToProps = state => {
  const foo = appSelectors.getFoo(state)
  const bar = appSelectors.getBar(state)

  return {
    foo,
    bar
  }
}

const mapDispatchToProps = dispatch => {
  const fetchFoo = () => dispatch(appOperations.startFetchFoo())
  const setBar = (value) => dispatch(appCreators.setBar(value))

  return {
    fetchFoo,
    setBar
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
