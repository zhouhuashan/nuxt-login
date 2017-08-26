import { getUserFromCookie, getUserFromLocalStorage } from '@/utils/helpers'

export default function ({ app, store, route, params, error, redirect, hotReload, isServer, req }) {
  const loggedUser = isServer ? getUserFromCookie(req) : getUserFromLocalStorage()
  if (loggedUser) store.commit('auth/setUser', loggedUser)
}
