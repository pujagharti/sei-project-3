import React from 'react'

import { getLocations } from '../../lib/api'
import LocationCard from './LocationCard'

class LocationsIndex extends React.Component{

  state = {
    locationsData: null
  }


  async componentDidMount(){

    const res = await getLocations()

    this.setState({
      locationsData: res.data
    })
  }

  render(){
    
    if (!this.state.locationsData) return <h1>Let me just get that for you</h1>
    const { feature } = this.props
    const { locationsData } = this.state
    return (
      
      locationsData.map((location => {
        return <LocationCard key={location._id} feature={feature} { ...location }/>
      }))

    )
  }
}



// const LocationsIndex = ({ feature }) => {

//   return (

//     <h1>{feature}</h1>
//   )

// }

export default LocationsIndex