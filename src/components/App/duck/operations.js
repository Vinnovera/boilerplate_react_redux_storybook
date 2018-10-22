import axios from 'axios'

import { Creators } from './actions'

const startFetchFoo = () => {
  return dispatch => {
    dispatch(Creators.fetchFooStarted())

    axios.get('/api/foo')
      .then(response => {
        dispatch(Creators.fetchFooSuccess(response.data))
      })
      .catch(error => dispatch(Creators.fetchFooFail(error)))
  }
}

export default {
  startFetchFoo
}
