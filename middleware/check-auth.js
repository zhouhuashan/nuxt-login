function getUserFromLocalStorage () {
  return window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null
}

function getUserFromCookie (req) {
  if (!req.headers.cookie) return
  const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('user='))
  if (!cookie) return
  const user = decodeURIComponent(cookie.split('=')[1])
  return JSON.parse(user)
}

export default function ({ app, store, route, params, error, redirect, hotReload, isServer, req }) {
  const loggedUser = isServer ? getUserFromCookie(req) : getUserFromLocalStorage()
  if (loggedUser) store.commit('auth/setUser', loggedUser)
}
