import React from 'react'
import { Comment, Rating } from 'semantic-ui-react'

const LocationSingleComment = (props) => {

  const { text, rating, createdAt } = props
  const { username, userimage } = props.local
  console.log('☘️ SINGLE COMMENT PROPS', props)
  const createdAtSliced = createdAt.slice(0, 10)

  return (
    <Comment>
      <Comment.Avatar src={userimage} />
      <Comment.Content>
        <Comment.Author as='a'><span>{username}</span></Comment.Author>
        <Comment.Metadata>
          <div>{createdAtSliced}</div>
        </Comment.Metadata>
        <Comment.Text>{text}</Comment.Text>
        <Comment.Text>
          <Rating icon='heart' size='mini' maxRating={5} rating={rating} disabled />
        </Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

export default LocationSingleComment