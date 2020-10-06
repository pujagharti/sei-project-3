import React from 'react'
import { Header, Image, Grid, GridColumn } from 'semantic-ui-react'

import LocationNew from '../locations/LocationNew'
import { getUserProfile } from '../../lib/api'


class LocalProfile extends React.Component {

  state = {
    profileData: null
  }

  async componentDidMount() {
    try {
      const res = await getUserProfile()

      this.setState({
        profileData: res.data
      })

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.profileData) return <h1>Just getting that for you</h1>

    const { username, userimage, bio } = this.state.profileData

    return (
      <div className='profile-outer-container'>
        <Header as='h2' className='profile-header'>Your Profile</Header>
        <Grid className='local-info-container'>
          <Grid.Column width={4}>
            <Image circular src={userimage} className='local-profile-image' />
          </Grid.Column>
          <GridColumn width={9}>
            <Header as='h2' className='local-profile-name'>
              {username}
            </Header>
            <Header as='h4'>{bio}</Header>
          </GridColumn>
        </Grid>

        <LocationNew userProfile={this.state.profileData} />
      </div>
    )
  }

}

export default LocalProfile