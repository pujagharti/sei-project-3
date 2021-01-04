import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'


const LocationCard = (props) => {

  const { _id, placeName, placePhotos, placeDescription } = props

  return (

      <>
      
      <Image src={placePhotos[0]}/>
      <Card.Content style={{ marginBottom: '64px' }}>
        <Card.Header>{placeName}</Card.Header>
        <Card.Description>
          {placeDescription}
        </Card.Description>
      </Card.Content>
      </>
  )

}


export default LocationCard