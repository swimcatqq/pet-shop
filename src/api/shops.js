import http from "../utils/http";

// 更新店铺
function updateShop(data) {

  //data -> 包含文件的

  // 上传文件采用的方法 -> 文本 和 文件分别处理一下，然后组合在一起传给后端
  const params = new FormData()
  for(let attr in data) {
    if( attr === 'file' && data[attr] === 'origin' ){
      continue;
    }
    if(attr === 'dynamictags') {
      params.append(attr, JSON.stringify(data[attr]))
    }
    else{
      params.append(attr, data[attr])
    }
  }
  
  return http.post('/shops/update', params, {
    // 决定上传文件的头信息
    headers: { 'content-type': 'multipart/form-data' },
  })
}

// 查询店铺
function findShop(data) {
  return http.get('/shops/list', data)
}

export {
  updateShop,
  findShop
}