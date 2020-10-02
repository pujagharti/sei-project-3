import axios from 'axios'

// const baseUrl = '/api'

export function getLocations(){
  return axios.get('/api/')
}

// export function postRegister(){
//   return axios.post('/api/register')
// }

export const registerUser = (formData) => {
  return axios.post('/api/register/', formData )
}