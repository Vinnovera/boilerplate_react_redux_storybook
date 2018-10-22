import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchFooStarted: [],
  fetchFooSuccess: ['value'],
  fetchFooFail: [],
  setBar: ['value']
}, {})

export { Types, Creators }
