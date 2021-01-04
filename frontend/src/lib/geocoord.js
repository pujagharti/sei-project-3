import Geocode from 'react-geocode'

export async function geoCoord(coordInput){
  const ApiKey = 'AIzaSyCGc1Gv1hGn7iQmC3RntdKil4d6FrVCFOY'

  Geocode.setApiKey(ApiKey)
  Geocode.setLanguage('en')
  Geocode.setRegion('CA')

  const result = await Geocode.fromAddress(coordInput).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location
      return { latitude: lat, longitude: lng } 
    },
    error => {
      console.log(error)
    }
  )
  return result
}

// Geocode.fromLatLng('46.220537', '-74.552723').then(
//   response => {
//     const address = response.results[0].formatted_address
//     console.log(address)
//   },
//   error => {
//     console.error(error)
//   }
// )