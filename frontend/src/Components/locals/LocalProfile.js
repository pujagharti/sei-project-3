import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Header, Image, Grid, Button } from 'semantic-ui-react'

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

  aboutYouStyle = {
    color: '#555'
  }

  render() {
    if (!this.state.profileData) return <h1>Just getting that for you</h1>

    const { username, userimage, bio, createdLocations } = this.state.profileData

    return (
      <>
        <Divider
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p style={{ fontSize: '25px'}}>Profile</p>
        </Divider>
        <div className='profile-outer-container profile-container-padding'>
          <Grid className='local-info-container'>
            <Grid.Column width={4} className='img-update-container'>
              <Image circular src={userimage} className='local-profile-image' />
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h2' className='local-profile-name'>
                {username}
              </Header>
              <Header as='h5' style={this.aboutYouStyle}>Here's what you're letting Montreal know
                <br />
                <small>You share this with the community</small>
                <br />
              </Header>
              <Header as='h3'>{bio}</Header>
              <Header as='h5'>Locations contributed: {createdLocations.length}</Header>
            </Grid.Column>
            <Grid.Column width={5}>
              <div className='update-info-btn'>
                <Button
                  fluid
                  animated='fade'
                  as={Link}
                  to='/local-register'
                >
                  <Button.Content visible>Update your info</Button.Content>
                  <Button.Content hidden>Keep it fresh!</Button.Content>
                </Button>
              </div>
            </Grid.Column>
          </Grid>
          <LocationNew userProfile={this.state.profileData} />
        </div>
      </>
    )
  }

}

export default LocalProfile