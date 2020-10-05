import React from 'react'
import { Image, Grid, Header, Segment, Card, List, Container } from 'semantic-ui-react'

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


            <Grid.Column floated='righ' width={6}>
              <Image bordered rounded size='large' src='https://www.lemontroyal.qc.ca/images/nouvelles/credit_PixupMTL.jpg' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "What a great place to meet people"
              </Header>
              <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "Become a Local to Comment & Like"
              </Header>
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


      <Grid clasName='images-bottom'>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Card>
              <Image src='https://cache.desktopnexus.com/thumbseg/1891/1891138-bigthumbnail.jpg' wrapped ui={false} />
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image src='https://cdn.tourradar.com/s3/tour/645x430/102695_5efbd8dc97a69.jpg' wrapped ui={false} />
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Image src='https://www.lemontroyal.qc.ca/images/amis-s-montigne-2009-randonnee-sentier-escarpement-pano-2018-07-12-exAKqcSevEJ4TmVyr8Xoz1vI.jpg' />
          </Grid.Column>
        </Grid.Row>
      </Grid>


      <Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "Community rich city"
                </Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
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