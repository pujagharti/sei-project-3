import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'


class LocationComments extends React.Component {


  render() {

    const {comments} = this.props.comments

    return (

      <Comment.Group>
        <Header as='h3' dividing>
          What people say
        </Header>

        

        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>

    )

  }


}

export default LocationComments