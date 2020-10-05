import React from 'react'

import LocationNew from '../locations/LocationNew'
import LocationCard from '../locations/LocationCard'
import { createNewLocation, getUserProfile } from '../../lib/api'


class LocalProfile extends React.Component {

  state = {
    profileData: null
  }

  async componentDidMount() {
    try {
      const res = await getUserProfile()
      console.log(res)

      this.setState({
        profileData: res.data
      })

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.profileData) return <h1>Just getting that for you</h1>

    const { createdLocations } = this.state.profileData

    return (
      <>
        <p>{this.state.profileData.email}</p>
        <p>{this.state.profileData.bio}</p>

        {
          createdLocations.map((location, index) => {
            return <LocationCard key={location._id} {...location} />

          })
        }


        <LocationNew />
      </>
    )
  }

}

export default LocalProfile