import {request} from "./request";

export  function getIndex() {
  return request({
    url: '/index/index/index'
  })
}

export function stayhomeOne(sid) {
  return request({
    url: '/index/Detail/read',
    params: {
      id: sid
    }
  })
}