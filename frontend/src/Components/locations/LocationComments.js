import React from 'react'
import { Button, Comment, Form, Header, Dropdown } from 'semantic-ui-react'

import LocationSingleComment from './LocationSingleComment'
import { createComment } from '../../lib/api'


const options = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 }
]


class LocationComments extends React.Component {

  state = {
    comments: [],
    formText: '',
    ratingValue: null
  }

  componentDidMount(){
    this.setState({
      comments: this.props.comments
    })
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
    const formData = { 
      text: this.state.formText,
      rating: this.state.ratingValue
    }
    try {
      const res = await createComment(this.props.locationId, formData)
      console.log('🍤JUST CREATED A NEW COMMENT!', res)
      const newComments = res.data.comments

      this.setState({
        comments: newComments,
        formText: '',
        ratingValue: null
      })

    } catch (err) {
      console.log(err)
    }
  }

  render() {

    const { comments, formText, ratingValue } = this.state

    return (

      <Comment.Group>
        <Header as='h3' dividing>
          What people say
        </Header>


        {!comments.length &&
        <p>Be the first to comment on this location</p>
        }
        {comments.map((comment, index) => {
          return <LocationSingleComment key={index} {...comment} />
        })
        }

        <Form onSubmit={this.handleSubmit} reply>
          <Form.TextArea onChange={this.handleTextChange} value={formText}/>

          <Dropdown
            onChange={this.handleDropdownChange}
            options={options}
            placeholder='Choose an option'
            selection
            value={ratingValue}
          />

          <Button content='Add a comment'
            labelPosition='left'
            icon='edit'
            primary />
        </Form>
      </Comment.Group>

    )

  }


}

export default LocationComments