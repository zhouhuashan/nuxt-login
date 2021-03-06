import Cookie from 'js-cookie'
import { getUserFromCookie } from '~/utils/helpers'

export default function ({ store, isServer, req }) {
  const loggedUser = isServer ? getUserFromCookie(req) : Cookie.getJSON('user')
  if (loggedUser) store.commit('auth/setUser', loggedUser)
}
