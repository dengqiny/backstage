import http from "./axios";

// 读取数据库
export const getshop = (data = {}) => {
  return http.request({
    url: '/pro',
    method: 'get',
    params: data,
  })
}
// 查询数据
export const searchshop = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/pro/search',
    method: 'get',
    params: {
      search: data
    },
  })
}
// 删除数据
export const deleteshop = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/pro/delete',
    method: 'get',
    params: {
      id: data
    },
  })
}
// 添加数据
export const addshop = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/pro/addAction',
    method: 'post',
    data: data
  })
}

//获取修改数据
export const upshop = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/pro/update',
    method: 'get',
    params: {
      _id: data
    },
  })
}
// 向后端提交修改数据
export const updatashop = (data = {}) => {
  console.log(data)
  return http.request({
    url: '/pro/updateAction',
    method: 'post',
    data: data
  })
}
