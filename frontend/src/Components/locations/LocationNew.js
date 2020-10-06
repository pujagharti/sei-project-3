import React from 'react'
import { Form, Input, TextArea, Button, Segment, Header, Grid } from 'semantic-ui-react'
import Select from 'react-select'

import { createNewLocation } from '../../lib/api'

import ImageUpload from '../common/ImageUpload'
import LocalLocationCard from '../locals/LocalLocationCard'

class LocationNew extends React.Component {

  state = {
    createdLocations: this.props.userProfile.createdLocations,
    formData: {
      placeName: '',
      placeDescription: '',
      feature: [''],
      placePhotos: ['']
    }
  }

  options = [
    { value: 'gowild', label: 'gowild' },
    { value: 'nightlife', label: 'nightlife' },
    { value: 'summer', label: 'summer' }
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

  handleMultiSelectChange = (selected) => {
    const selectedItems = selected ? selected.map(item => item.value) : []
    const formData = { ...this.state.formData, feature: selectedItems }
    this.setState({
      formData
    })
  }

  handleImageChange = url => {
    console.log('uploaded, and url:', url)
    const formData = { ...this.state.formData, placePhotos: url }
    this.setState({ formData })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await createNewLocation(this.state.formData)
      const newLocation = res.data
      const newLocations = [...this.state.createdLocations, newLocation]

      this.setState({
        createdLocations: newLocations,
        formData: {
          placeName: '',
          placeDescription: '',
          feature: [''],
          placePhotos: ['']
        }
      })

    } catch (err) {
      console.log(err)
    }
  }

  render() {

    const { placeName, placeDescription } = this.state.formData
    const { createdLocations } = this.state

    if (!createdLocations) return <h1>Just getting that for you</h1>

    return (
      <>
        <Segment>
          <Header>Your locations</Header>
          {createdLocations.length === 0 &&
            <Header as='h1'>
                You haven't posted any locations yet.
                Add some below.
            </Header>
          }
          <Grid>
            {
              createdLocations.map((location) => {
                return <LocalLocationCard
                  key={location._id}
                  {...location}
                />
              })
            }
          </Grid>
        </Segment>

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
          <Select
            options={this.options}
            isMulti
            onChange={this.handleMultiSelectChange}
          />
          <Form.Field
            control={ImageUpload}
            onChange={this.handleImageChange}
            label='Profile Image'
          />
          <Form.Field control={Button}>Submit</Form.Field>

        </Form>
      </>
    )

  }

}

export default LocationNew