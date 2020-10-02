import React from 'react'
import { getLocations } from '../../lib/api'



class LocationsIndex extends React.Component{




  async componentDidMount(){

    const res = await getLocations()
    console.log(res)
  }

  render(){
    
    const { feature } = this.props
    return (
      <h1>{feature}</h1>
    )
  }
}



// const LocationsIndex = ({ feature }) => {

//   return (

//     <h1>{feature}</h1>
//   )

// }

export default LocationsIndex