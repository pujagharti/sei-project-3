import React from 'react'
import { Button, Comment, Form, Header, Dropdown } from 'semantic-ui-react'

import LocationSingleComment from './LocationSingleComment'
import { createComment } from '../../lib/api'


const options = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 },
]


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
    ],
    formText: '',
    ratingValue: null
  }


  handleTextChange = (e) => {
    const formText = e.target.value

    this.setState({
      formText
    })
  }


  handleDropdownChange = (e, { value }) => this.setState({ ratingValue: value })


  handleSubmit = async (e) => {
    e.preventDefault()

    const formData = { text: this.state.formText, rating: this.state.ratingValue }

    try {
      const res = await createComment(this.props.locationId, formData)

      console.log(res)

    } catch (err) {
      console.log(err)
    }

  }

  render() {

    const { comments, value } = this.state

    return (

      <Comment.Group>
        <Header as='h3' dividing>
          What people say
        </Header>

        {comments.map((comment, index) => {
          return <LocationSingleComment key={index} {...comment} />
        })
        }

        <Form onSubmit={this.handleSubmit} reply>
          <Form.TextArea onChange={this.handleTextChange} />

          <Dropdown
            onChange={this.handleDropdownChange}
            options={options}
            placeholder='Choose an option'
            selection
            value={value}
          />

          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>

    )

  }


}

export default LocationComments