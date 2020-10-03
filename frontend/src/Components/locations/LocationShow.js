import React from 'react'

import { getSingleLocation } from '../../lib/api'

class LocationShow extends React.Component {

  state = {
    locationData: null
  }

  async componentDidMount() {
    const locationId = this.props.match.params.id

    const res = await getSingleLocation(locationId)

    this.setState({
      locationData: res.data
    })
  }


  render() {

    if (!this.state.locationData) return <h1>Trying to find that for you now</h1>

    return (
      <h1>Location SHOW!</h1>
    )
  }

}

export default LocationShow