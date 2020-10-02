import axios from 'axios'

// const baseUrl = '/api'

export function getLocations(){
  return axios.get('/api/')
}

export const registerUser = (formData) => {
  return axios.post('/api/register/', formData )
}

export const loginUser = (formData) => {
  return axios.post('/api/login/', formData )
}



