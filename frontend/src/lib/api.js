import axios from 'axios'

const baseUrl = '/api'

function withHeaders(){
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}


export function getLocations(){
  return axios.get('/api/locations')
}

export function getSingleLocation(id){
  return axios.get(`${baseUrl}/locations/${id}`)
}

export function createComment(locationId, formText){
  console.log(locationId)
  return axios.post(`/api/locations/${locationId}/comments`, formText, withHeaders())
}



//Authentication

export const registerUser = (formData) => {
  return axios.post('/api/register/', formData )
}

export const loginUser = (formData) => {
  return axios.post('/api/login/', formData )
}





