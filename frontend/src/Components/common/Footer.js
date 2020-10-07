import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Grid, List, Header, Container } from 'semantic-ui-react'


function Footer() {

  return (
    <Segment inverted vertical style={{ padding: '3em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='About' />
            <List link inverted>
              <Link to='/about'>
                <List.Item as='a'>Our story</List.Item>
              </Link>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  )

}

export default Footer