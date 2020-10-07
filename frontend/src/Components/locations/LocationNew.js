import React from 'react'
import { Link } from 'react-router-dom'
import {
  Form, Input, TextArea, Button,
  Segment, Header, Grid, Icon,
  List, Label
} from 'semantic-ui-react'
import Select from 'react-select'

import { createNewLocation, createCoord } from '../../lib/api'

import ImageUpload from '../common/ImageUpload'
import LocalLocationCard from '../locals/LocalLocationCard'
import { geoCoord } from '../../lib/geocoord'

// import Geocoord from '../../lib/Geocoord'

class LocationNew extends React.Component {

  state = {
    createdLocations: this.props.userProfile.createdLocations,
    formData: {
      placeName: '',
      placeDescription: '',
      feature: [''],
      placePhotos: ['']
    },
    coordForm: {
      coordInput: ''
    },
    coordData: {
      latitude: 0,
      longitude: 0
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

  handleCoordInputChange = (e) => {
    const coordForm = { ...this.state.coordForm, [e.target.name]: e.target.value }
    this.setState({
      coordForm
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
      const result = await geoCoord(this.state.coordForm.coordInput)
      const res = await createNewLocation(this.state.formData)
      const newLocation = res.data
      const resCoord = await createCoord(res.data._id, result)
      console.log(resCoord)
      const newLocations = [...this.state.createdLocations, newLocation]
      this.setState({
        createdLocations: newLocations,
        formData: {
          placeName: '',
          placeDescription: '',
          feature: [''],
          placePhotos: ['']
        },
        coordForm: {
          coordInput: ''
        },
        coordData: { 
          latitude: 0,
          longitude: 0
        }
      })

    } catch (err) {
      console.log(err)
    }
  }

  segmentStyle = {
    marginTop: '30px'
  }

  locationsPlaceholderStyle = {
    color: '#888'
  }

  render() {

    const { placeName, placeDescription } = this.state.formData
    const { coordInput } = this.state.coordForm
    const { createdLocations } = this.state

    if (!createdLocations) return <h1>Just getting that for you</h1>

    return (
      <>
        <Segment style={this.segmentStyle}>
          <Header as='h2'>Your contributed locations</Header>
          {createdLocations.length === 0 &&
            <Header style={this.locationsPlaceholderStyle} as='h3'>
              You haven't added any locations yet.
              Contribute some below!
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

        <Segment className='contribute-location-segment'>
          <div className='contribute-location-outer'>
            <Header as='h2'>Contribute a new location</Header>

            <List horizontal>
              <List.Item>

                <List.Content>
                  <List.Header><Icon circular name='cocktail' />Great nightlife?</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header><Icon circular name='tree' />Wild nature?</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header><Icon circular name='sun' />Summer gems?</List.Header>
                </List.Content>
              </List.Item>
            </List>
            <Header as='h5' className='location-encourage'>Contribute a location and let others discover your Montreal</Header>

            <div className='location-form-outer'>
              <Form onSubmit={this.handleSubmit}>

                <Label>Placename</Label>
                <Form.Field
                  control={Input}
                  placeholder='Placename'
                  onChange={this.handleChange}
                  name='placeName'
                  value={placeName}
                />

                <Label>Say a bit about this place</Label>
                <Form.Field
                  control={TextArea}
                  placeholder='Get the conversation started!'
                  onChange={this.handleChange}
                  name='placeDescription'
                  value={placeDescription}
                />

                <Label>Pick a category!</Label>
                <Select
                  options={this.options}
                  isMulti
                  onChange={this.handleMultiSelectChange}
                  style={this.selectStyle}
                />
                <br />

                <Label>Upload an image</Label>
                <Form.Field
                  control={ImageUpload}
                  onChange={this.handleImageChange}
                />
                <Label>Enter the location name or postcode</Label>
                <Form.Field
                  control={Input}
                  placeholder='Montreal'
                  onChange={this.handleCoordInputChange}
                  name='coordInput'
                  value={coordInput}
                />
                <Form.Field control={Button}>Submit</Form.Field>
              </Form>
            </div>
          </div>
          <div className='to-update-profile'>
            <Button
              fluid
              animated='fade'
              as={Link}
              to='/features'
            >
              <Button.Content visible>Discover More Locations</Button.Content>
              <Button.Content hidden>Back to Features</Button.Content>
            </Button>
          </div>
        </Segment>
      </>
    )

  }

}

export default LocationNew