import React from 'react'
import { Button, Comment, Form, Header, Dropdown, Rating } from 'semantic-ui-react'

import LocationSingleComment from './LocationSingleComment'
import { createComment } from '../../lib/api'


class LocationComments extends React.Component {

  state = {
    comments: [],
    formText: '',
    ratingValue: 0
  }

  componentDidMount() {
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

  handleRate = (e, { rating }) => {
    console.log('CHANGING RATING!',rating)
    this.setState({ ratingValue: rating })
  }



  handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      text: this.state.formText,
      rating: this.state.ratingValue
    }
    try {
      const res = await createComment(this.props.locationId, formData)
      const newComments = res.data.comments
      this.setState({
        comments: newComments,
        formText: '',
        ratingValue: 1
      }, console.log('state in callback', this.state))
    } catch (err) {
      console.log(err)
    }
  }



  // handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const formData = {
  //     text: this.state.formText,
  //     rating: this.state.ratingValue
  //   }
  //   try {
  //     const res = await createComment(this.props.locationId, formData)
  //     const newComments = res.data.comments

  //     this.setState({
  //       comments: newComments,
  //       formText: '',
  //       ratingValue: 1
  //     })

  //   } catch (err) {
  //     console.log(err)
  //   }
  // }





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
          <Form.TextArea onChange={this.handleTextChange} value={formText} />

          <div>
            <Rating icon='heart'
              value={ratingValue}
              maxRating={5}
              onRate={this.handleRate}
            />
          </div>

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