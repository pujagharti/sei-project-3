import axios from 'axios'

const baseUrl = '/api'




export async function getLocations(){
  return await axios.get('/api/locations')
}

export async function createNewLocation(formData){
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  return await axios.post('/api/locations', formData, config)
}

export async function deleteLocation(locationId){
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  return await axios.delete(`${baseUrl}/locations/${locationId}`, config)
}

export async function getSingleLocation(locationId){
  return await axios.get(`${baseUrl}/locations/${locationId}`)
}

export async function createComment(locationId, formText){
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  return await axios.post(`/api/locations/${locationId}/comments`, formText, config)
}

export async function deleteComment(locationId, commentId){
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  return await axios.delete(`/api/locations/${locationId}/comments/${commentId}`, config)
}

export async function createCoord(locationId, formText){
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  return await axios.post(`/api/locations/${locationId}/coords`, formText, config)
}

export async function getUserProfile(){
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  return await axios.get('/api/profile', config)
}



//Authentication

export const registerUser = async(formData) => {
  return await axios.post('/api/register/', formData )
}

export const loginUser = async(formData) => {
  return await axios.post('/api/login/', formData )
}

export const updateUser = async(formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
  return await axios.put('/api/profileupdate', formData, config)
}



