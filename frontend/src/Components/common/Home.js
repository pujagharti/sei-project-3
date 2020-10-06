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
              <Image bordered rounded size='large' src='https://www.lemontroyal.qc.ca/images/nouvelles/credit_PixupMTL.jpg' />
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
            <Image bordered rounded size='large' src='https://malloryontravel.com/wp-content/uploads/2014/06/Iain-Mallory-300-101-1-1024x697.jpg' />
          </Grid.Column>
          <Grid.Column floated='right' width={7}>
            <Image bordered rounded size='large' src='https://cdn.theculturetrip.com/wp-content/uploads/2017/12/33554467340_65375926e8_k.jpg' />
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


      <Grid className='images-bottom'>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Card>
              <Image src='https://sofitel.accor.com/destinations/imagerie/saint-joseph-oratory-304x253.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>St Joseph Oratory</Card.Header>
                <Card.Description>
                  What started out as a small chapel has since become one of the world’s most visited sacred spaces and one of Montréal’s most iconic landmarks.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card>
              <Image src='https://www.routedurichelieu.ca/fr/wp-content/uploads/2012/06/mont-st-hilaire2.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Mont Saint-Hilaire</Card.Header>
                <Card.Description>
                  Just outside of Montreal, Mont Saint-Hilaire nature reserve is another great local spot for those who like their hikes to be more scenic than strenuous, with relatively easy, straightforward trails open all year round.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card>
              <Image src='https://www.lemontroyal.qc.ca/images/amis-s-montigne-2009-randonnee-sentier-escarpement-pano-2018-07-12-exAKqcSevEJ4TmVyr8Xoz1vI.jpg' />
              <Card.Content>
                <Card.Header>Mont Royal Park</Card.Header>
                <Card.Description>
                  The centerpiece and the namesake of Montreal, this small mountain offers sightseeing in every direction as you explore every angle.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>


      <Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  ""
                </Header>
                <p style={{ fontSize: '1.33em' }}>Words here.........</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "Line here about ......"
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