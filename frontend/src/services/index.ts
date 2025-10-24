import axios from 'axios'
import router from '@/router'

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000
})

api.interceptors.response.use(null, async (error) => {
  if(error.status == 404) {
    await router.push('/NotFound')
  }
})