import React from 'react'

import { getLocations } from '../../lib/api'
import LocationCard from './LocationCard'
import LocationsMap from './LocationsMap'

class LocationsIndex extends React.Component {

  state = {
    locationsData: null
  }
  


  async componentDidMount() {
    const res = await getLocations()
    const featureSelected = this.props.match.params.feature
    console.log('SELECTED!', featureSelected)
    console.log(res.data)
    const isFeaturePresent = (feature) => feature.toLowerCase() === featureSelected 
    const filteredLocations = res.data.filter((location) => {
      return location.feature.some(isFeaturePresent)
    })
    console.log('LOCATIONS!', filteredLocations)
    this.setState({
      locationsData: filteredLocations
    })
  }

  render() {

    if (!this.state.locationsData) return <h1>Let me just get that for you</h1>

    const { feature } = this.props
    const { locationsData } = this.state

    return (

      <div className='locations-index-container'>
        <section className='locations-index-cards'>
          {
            locationsData.map((location => {
              return <LocationCard key={location._id} feature={feature} {...location} />
            }))
          }
        </section>
        <div>
          <LocationsMap locationsData={locationsData}/>
        </div>
      </div>
    )
  }
}
export default LocationsIndex