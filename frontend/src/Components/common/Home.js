import React from 'react'
import { Grid, Header, Segment, Card, List, Container } from 'semantic-ui-react'

function Home() {

  return (
    <>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={9}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Discover your Montreal
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                With events covering the city, from outdoor......
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                We Connect thousands of people across the city
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Allowing people to share their experiences
              </p>
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
              <Header as='h3' style={{ fontSize: '2em' }}>
                {'"What a great place to meet people"'}
              </Header>
              <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                {'"Become a Local to Comment & Like"'}
              </Header>
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
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
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