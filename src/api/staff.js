import http from "./axios";

// 读取数据库
export const getstaff = (data = {}) => {
  return http.request({
    url: '/staff',
    method: 'get',
    params: data,
  })
}
// 查询数据
export const searchstaff = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/staff/search',
    method: 'get',
    params: {
      search: data
    },
  })
}
// 删除数据
export const deletestaff = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/staff/delete',
    method: 'get',
    params: {
      id: data
    },
  })
}
// 添加数据
export const addstaff = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/staff/addAction',
    method: 'post',
    data: data
  })
}

//获取修改数据
export const upstaff = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/staff/update',
    method: 'get',
    params: {
      _id: data
    },
  })
}
// 向后端提交修改数据
export const updatastaff = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/staff/updateAction',
    method: 'post',
    data: data
  })
}
