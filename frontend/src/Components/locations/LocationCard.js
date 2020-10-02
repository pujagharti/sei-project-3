import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const LocationCard = (props) => {

  const { placeName, placePhoto, placeDescription } = props

  return (
    
    <Card>
      <Image src={placePhoto[0]}/>
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