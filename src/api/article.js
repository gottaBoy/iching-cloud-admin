import { service } from '@/utils/request'

export function fetchList(query) {
  return service({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return service({
    url: '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return service({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return service({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return service({
    url: '/article/update',
    method: 'post',
    data
  })
}
