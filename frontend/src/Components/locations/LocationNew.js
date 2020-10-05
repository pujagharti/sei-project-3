import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import Select from 'react-select'

import { createNewLocation } from '../../lib/api'

class LocationNew extends React.Component {

  state = {
    formData: {
      placeName: '',
      placeDescription: '',
      feature: ['']
    }
  }


  options = [
    { value: }
  ]

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }
    this.setState({
      formData
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await createNewLocation(this.state.formData)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  render() {

    const { placeName, placeDescription } = this.state.formData

    return (
      <>
        <h1>Add a new place for the community!</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              label='Placename'
              placeholder='Placename'
              onChange={this.handleChange}
              name='placeName'
              value={placeName}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label='Say a bit about this place'
            placeholder='Get the conversation started!'
            onChange={this.handleChange}
            name='placeDescription'
            value={placeDescription}
          />
          
          <Form.Field control={Button}>Submit</Form.Field>

        </Form>
      </>
    )

  }


}

export default LocationNew