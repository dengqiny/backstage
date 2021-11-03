import http from "./axios";

// 读取数据库
export const getuser = (data = {}) => {
  return http.request({
    url: '/user',
    method: 'get',
    params: data,
  })
}
// 查询数据
export const searchuser = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/user/search',
    method: 'get',
    params: {
      search: data
    },
  })
}
// 删除数据
export const deleteuser = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/user/delete',
    method: 'get',
    params: {
      id: data
    },
  })
}
// 添加数据
export const adduser = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/user/addAction',
    method: 'post',
    data: data
  })
}

//获取修改数据
export const upuser = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/user/update',
    method: 'get',
    params: {
      _id: data
    },
  })
}
// 向后端提交修改数据
export const updatauser = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/user/updateAction',
    method: 'post',
    data: data
  })
}
