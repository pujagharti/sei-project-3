import React from 'react'

import LocationNew from '../locations/LocationNew'
import { getUserProfile } from '../../lib/api'


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
    return (
      <>
        <p>{this.state.profileData.email}</p>
        <p>{this.state.profileData.bio}</p>



        <LocationNew />
      </>
    )
  }

}

export default LocalProfile