import React from 'react'
import { Link } from 'react-router-dom'
import { Popup, Card, Rating, Grid } from 'semantic-ui-react'

const LocalLocationCard = (props) => {
  const { _id, placeName, placePhotos, placeDescription, avgRating } = props
  console.log(placePhotos)


  const divStyle = {
    backgroundImage: `url(${placePhotos})`,
    width: '100%',
    height: '200px',
    borderRadius: '5px',
    backgroundSize: 'cover'
  }

  return (

    <Grid.Column width={4}>
      <Popup
        trigger={
          <Card className='popup-card'>
            <Link
              to={`/locations/${_id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div style={divStyle}></div>
            </Link>
            <Card.Content>
              <Card.Header>{placeName}</Card.Header>
              <Card.Description className='local-place-description'>
                {placeDescription}
              </Card.Description>
            </Card.Content>
          </Card>
        }
      >
        <Popup.Header>Community Rating</Popup.Header>
        <Popup.Content>
          <Rating icon='heart' defaultRating={avgRating} maxRating={5} disabled/>
        </Popup.Content>
      </Popup>
    </Grid.Column>
  )
}

export default LocalLocationCard
