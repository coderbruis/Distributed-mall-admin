import request from '@/utils/request'

export function login(data) {
  return request({
    // url: '/oauth/oauth/token',
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    // url: '/api/user/currentUser',
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function getUsrMgrInfo(query) {
  return request({
    url: '/vue-element-admin/user-mgr/info',
    method: 'get',
    params: query
  })
}

export function createUser(data) {
  return request({
    url: '/vue-element-admin/user/create',
    method: 'post',
    data
  })
}
