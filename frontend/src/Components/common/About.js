import React from 'react'
import { Segment, Header, Container, Divider } from 'semantic-ui-react'

function About() {

  return (
    <Segment 
      style={{ padding: '8em 0em', borderBottom: 'none' }}
      vertical
    >

      <Container text>
        <div className='about-box'>
          <Header as='h3' style={{ fontSize: '2em' }}>
            We empower local people to share, inspire and build stronger communities together.
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            We provide everything you need to know about the our city, as well as celebrating the quirks, eccentricities, hidden and surprising bits that make up the alternative side of the city. Upbeat and eclectic, created by a diverse team of contributors who share a passion for Montréal.
          </p>
        </div>
      </Container>
      <Divider
        as='h4'
        className='header'
        horizontal
        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
      >
        <p>About</p>
      </Divider>

    </Segment>
  )
}

export default About