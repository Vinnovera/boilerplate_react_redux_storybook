import { createReducer } from 'reduxsauce'
import { Types } from './actions'
import { INITIAL_STATE } from './initialState'

const _fetchFooStarted = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchFooStarted: true
  }
}

const _fetchFooSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    foo: action.value,
    fetchFooStarted: false
  }
}

const _fetchFooFail = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    fetchFooStarted: false
  }
}

const _setBar = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    bar: action.value
  }
}

const HANDLERS = {
  [Types.FETCH_FOO_STARTED]: _fetchFooStarted,
  [Types.FETCH_FOO_SUCCESS]: _fetchFooSuccess,
  [Types.FETCH_FOO_FAIL]: _fetchFooFail,
  [Types.SET_BAR]: _setBar
}

export default createReducer(INITIAL_STATE, HANDLERS)
