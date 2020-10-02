import React from 'react'
import { Card } from 'semantic-ui-react'


const LocationCard = (props) => {

  const { placeName } = props

  return (
    <Card>
      <Card.Content>
        <Card.Description>
          {placeName}
        </Card.Description>
      </Card.Content>
    </Card>
  )

}


export default LocationCard