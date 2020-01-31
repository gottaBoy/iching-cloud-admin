import ichingdb from '@/utils/localstorage'

const state = {
  accessToken: ichingdb.get('ACCESS_TOKEN'),
  refreshToken: ichingdb.get('REFRESH_TOKEN'),
  routeToken: ichingdb.get('ROUTE_TOKEN', null),
  expireTime: ichingdb.get('EXPIRE_TIME', 0),
  user: ichingdb.get('USER'),
  permissions: ichingdb.get('PERMISSIONS'),
  routes: ichingdb.get('USER_ROUTER') || []
}

const mutations = {
  setAccessToken(state, val) {
    ichingdb.save('ACCESS_TOKEN', val)
    state.accessToken = val
  },
  setRefreshToken(state, val) {
    ichingdb.save('REFRESH_TOKEN', val)
    state.refreshToken = val
  },
  setExpireTime(state, val) {
    ichingdb.save('EXPIRE_TIME', val)
    state.expireTime = val
  },
  setUser(state, val) {
    ichingdb.save('USER', val)
    state.user = val
  },
  setPermissions(state, val) {
    ichingdb.save('PERMISSIONS', val)
    state.permissions = val
  },
  setRoutes(state, val) {
    ichingdb.save('USER_ROUTER', val)
    state.routes = val
  },
  setRouteToken(state, val) {
    ichingdb.save('ROUTE_TOKEN', val)
    state.routeToken = val
  }
}

const actions = {
  setAccessToken({ commit }, { val }) {
    commit('setAccessToken', val)
  },
  setRefreshToken({ commit }, { val }) {
    commit('setRefreshToken', val)
  },
  setExpireTime({ commit }, { val }) {
    commit('setExpireTime', val)
  },
  setUser({ commit }, { val }) {
    commit('setUser', val)
  },
  setPermissions({ commit }, { val }) {
    commit('setPermissions', val)
  },
  setRoutes({ commit }, { val }) {
    commit('setRoutes', val)
  },
  setRouteToken({ commit }, { val }) {
    commit('setRouteToken', val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
