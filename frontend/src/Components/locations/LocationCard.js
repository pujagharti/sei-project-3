import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const LocationCard = (props) => {

  const { placeName, placePhotos, placeDescription } = props

  return (
    
    <Card className='location-card'>
      <Image src={placePhotos[0]}/>
      <Card.Content>
        <Card.Header>{placeName}</Card.Header>
        <Card.Description>
          {placeDescription}
        </Card.Description>
      </Card.Content>
    </Card>
    
  )

}


export default LocationCard