export default {
  getUserFromLocalStorage () {
    return window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null
  },
  getUserFromCookie (req) {
    if (!req.headers.cookie) return
    const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('user='))
    if (!cookie) return
    const user = decodeURIComponent(cookie.split('=')[1])
    return JSON.parse(user)
  }
}
