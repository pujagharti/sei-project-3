import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

import LocationSingleComment from './LocationSingleComment'


class LocationComments extends React.Component {

  state = {
    comments: [
      {
        text: 'Great place to stay! Loved it!',
        rating: 4,
        local: {
          _id: '5f78b33f26d5042567fc6098',
          username: 'Jess_Reinger',
          email: 'Presley.Hickle@email.com',
          userimage: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          bio: '',
          isLocal: false
        }
      },
      {
        text: 'OK, but too expensive for what it is!',
        rating: 3,
        local: {
          _id: '5f78b33f26d5042567fc6099',
          username: 'Casimir.Doyle',
          email: 'Ebony.Botsford@email.com',
          userimage: 'https://s3.amazonaws.com/uifaces/faces/twitter/frankiefreesbie/128.jpg',
          bio: '',
          isLocal: false
        }
      }
    ]
  }

  render() {

    // const {comments} = this.props.comments
    const { comments } = this.state

    return (

      <Comment.Group>
        <Header as='h3' dividing>
          What people say
        </Header>

        {comments.map((comment, index)=>{
          return <LocationSingleComment key={index} { ...comment }/>
        })
        }

        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>

    )

  }


}

export default LocationComments