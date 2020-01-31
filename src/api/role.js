import { service } from '@/utils/request'

export function getRoutes() {
  return service({
    url: '/auth/routes',
    method: 'get'
  })
}

export function getRoles() {
  return service({
    url: '/auth/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return service({
    url: '/auth/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return service({
    url: `/auth/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return service({
    url: `/auth/role/${id}`,
    method: 'delete'
  })
}
