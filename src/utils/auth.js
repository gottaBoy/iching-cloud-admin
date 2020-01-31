import ichingdb from '@/utils/localstorage'
// import ichingdb from 'js-cookie'

// const TokenKey = 'Admin-Token'

export function getToken() {
  return ichingdb.get('ACCESS_TOKEN', '')
}

export function setToken(token) {
  return ichingdb.set('ACCESS_TOKEN', token)
}

export function removeToken() {
  return ichingdb.remove('ACCESS_TOKEN')
}

export function getRefreshToken() {
  return ichingdb.get('REFRESH_TOKEN', '')
}

export function getExpireTime() {
  return ichingdb.get('EXPIRE_TIME', 0)
}

export function getRouteTokenExpireTime() {
  return ichingdb.get('ROUTE_TOKEN_EXPIRE_TIME', 0)
}

export function getRouteToken() {
  return ichingdb.get('ROUTE_TOKEN', '')
}

export function removeRouteToken() {
  return ichingdb.remove('ROUTE_TOKEN')
}
