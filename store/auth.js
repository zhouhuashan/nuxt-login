import Cookie from 'js-cookie'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser (state, user) {
    state.user = user || null
    if (process.browser) {
      window.localStorage.setItem('user', JSON.stringify(user))
      Cookie.set('user', user)
    }
  },
  logout (state) {
    state.user = null
    if (process.browser) {
      window.localStorage.removeItem('user')
      Cookie.remove('user')
    }
  }
}

export const actions = {
  logout ({ commit }) {
    commit('logout')
  }
}

export const getters = {
  loggedUser (state) {
    return state.user
  },
  isAuthenticated (state) {
    return !!state.user
  }
}
