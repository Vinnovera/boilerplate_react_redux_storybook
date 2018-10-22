const getApp = state => state.app

const getFoo = (state) => {
  return getApp(state).foo
}

const getBar = (state) => {
  return getApp(state).bar
}

export default {
  getFoo,
  getBar
}
