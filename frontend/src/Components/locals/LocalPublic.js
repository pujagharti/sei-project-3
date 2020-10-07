import React from 'react'
import { Item } from 'semantic-ui-react'

const LocalPublic = (props) => {

  console.log(props)
  const { username, bio, userimage } = props

  return (
    <>
      <Item.Group>
        <Item>
          <Item.Image size='small' src={userimage} className='contributor-img'/>

          <Item.Content>
            <Item.Header as='a'>Contributed by: {username}</Item.Header>
            <Item.Description>
              <p>{bio}</p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </>
  )
}

export default LocalPublic