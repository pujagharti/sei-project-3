import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'


const LocationCard = (props) => {

  const { _id, placeName, placePhotos, placeDescription } = props

  return (

    <Link to={`/locations/${_id}`} >
      <Card className='location-card'>
        <Image src={placePhotos[0]} />
        <Card.Content>
          <Card.Header>{placeName}</Card.Header>
          <Card.Description>
            {placeDescription}
          </Card.Description>
        </Card.Content>
      </Card>
    </Link>
  )

}


export default LocationCard