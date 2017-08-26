export default function ({ app, store, route, params, error, redirect, hotReload }) {
  if (!store.getters['auth/isAuthenticated']) {
    return redirect('/login')
  }
}
