import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:8888/htdocs/hotel-admin/public/index.php',
    timeout: 5000
  })
  instance.interceptors.response.use(config=>{
    return config;
  }, error => {
    console.log(error);
  })
  instance.interceptors.response.use(res=>{
    return res.data;
  },error => {
    console.log(error);
  })
  return instance(config);
}