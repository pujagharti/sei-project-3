import React from 'react'
import { Image, Card, Grid } from 'semantic-ui-react'

function Home() {

  return (
    <>
      <div className='container-one'>
        <div className='ui centered card'>
          <Card>
            <Card.Content>
              <Card.Header>Discover your Montreal</Card.Header>
            </Card.Content>
          </Card>
        </div>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ81DZpX9_zzU7Qe3oRf3VDrE7JWWrL7O2I8g&usqp=CAU' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://cdn.tourradar.com/s3/tour/645x430/102695_5efbd8dc97a69.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://images.dailyhive.com/20190603112344/montreal-circus-festival-rue-cirque.jpg' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className='container-two'>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <div className='ui centered card'>
                <Card>
                  <Card.Content>
                    <Card.Header>Join your community</Card.Header>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ81DZpX9_zzU7Qe3oRf3VDrE7JWWrL7O2I8g&usqp=CAU' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://cdn.tourradar.com/s3/tour/645x430/102695_5efbd8dc97a69.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://images.dailyhive.com/20190603112344/montreal-circus-festival-rue-cirque.jpg' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <div className='container-three'>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <div className='ui centered card'>
                <Card>
                  <Card.Content>
                    <Card.Header>and become a local to share your next experience!</Card.Header>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>

  )
}

export default Home