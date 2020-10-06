import React from 'react'
import { Image, Grid, Header, Segment, Card, List, Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={9}>
              <Header>HELLOOOOOOOOO</Header><
              <Header as='h3' style={{ fontSize: '2em' }}>
                Discover your Montreal
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                A city that is in love with festivals, the arts, good food, living well and enjoying life to the hilt
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                We aim to bring people together to share meaningful experiences
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Share your
              </p>
              <Link to={'/features'}>
                <Button type='submit'>Find what's on</Button>
              </Link>
            </Grid.Column>


            <Grid.Column floated='right' width={6}>
              <div id='park-img' className='home-images'></div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Link to='/register'><Header as='h3' style={{ fontSize: '2em' }}>
                Sign up to Comment & Like
              </Header>
              </Link>
              <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Link to={'/local-register'}><Header as='h3' style={{ fontSize: '2em' }}>
                Or become a local to share your favorite local spots!
              </Header></Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Grid>
          <Grid.Column floated='left' width={7}>
            <div id='street-img' className='home-images'></div>
          </Grid.Column>
          <Grid.Column floated='right' width={7}>
            <div id='culture-img' className='home-images'></div>
            {/* <Image bordered rounded size='large' src='https://cdn.theculturetrip.com/wp-content/uploads/2017/12/33554467340_65375926e8_k.jpg' /> */}
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Join Your Community Today!
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Grid >
          <Grid.Row columns={3}>
            <Grid.Column>
              <Card>
                <div id='parks-card-img' className='home-card-imgs'></div>
                <Card.Content>
                  <Card.Header>Parks and Recreation</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <div id='wild-card-img' className='home-card-imgs'></div>
                <Card.Content>
                  <Card.Header>Wild Outdoors</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <div id='hiking-card-img' className='home-card-imgs'></div>
                <Card.Content>
                  <Card.Header>Hiking and Walks</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  {'"Community rich city"'}
                </Header>
                <p style={{ fontSize: '1.33em' }}>Words here.........</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  {'"Line here about ......"'}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Come
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Map</List.Item>

                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>


    </>

  )
}

export default Home