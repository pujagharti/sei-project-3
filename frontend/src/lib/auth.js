

export function setToken(token){
  localStorage.setItem('token', token)
}

export const getToken = () =>{
  return localStorage.getItem('token')
}

export function isLocal(isLocal){
  return localStorage.setItem('isLocal', isLocal)
}

export function checkIsLocal(){
  if (localStorage.getItem('isLocal') === 'false'){
    return false
  }
  return localStorage.getItem('isLocal')
}

export function logout(){
  localStorage.removeItem('token')
  localStorage.removeItem('isLocal')
}

const getPayload = () => {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  
  return JSON.parse(atob(parts[1]))
}

export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.floor(Date.now() / 1000)
  return now < payload.exp
}