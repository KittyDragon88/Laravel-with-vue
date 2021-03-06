import axios from 'axios'

export default axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json'
  }
})
