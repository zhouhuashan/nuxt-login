import { createNetworkInterface } from 'apollo-client'

export default (store) => {
  const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj1645vlwanoe01184baf05ne'
  })

  const authorization = {
    applyMiddleware (req, next) {
      const token = store.state.auth.user.token // get token from store

      if (!req.options.headers) {
        req.options.headers = {}
      }
      if (token) {
        req.options.headers.authorization = `Bearer ${token}`
      }
      next()
    }
  }

  networkInterface.use([authorization])
}
