import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { getSingleLocation } from '../../lib/api'
import CarouselSlide from './CarouselSlide'
import LocationComments from './LocationComments'
import LocalPublic from '../locals/LocalPublic'

class LocationShow extends React.Component {

  state = {
    locationData: null
  }

  async componentDidMount() {
    const locationId = this.props.match.params.id

    const res = await getSingleLocation(locationId)

    this.setState({
      locationData: res.data
    })
  }


  render() {

    if (!this.state.locationData) return <h1>Trying to find that for you now</h1>

    const { placePhotos, placeName, placeDescription, amenities, local, comments } = this.state.locationData
    const features = this.state.locationData.feature
    const locationId = this.props.match.params.id

    return (
      <>
        <div className='location-show-container'>
          <div className='carousel-container'>
            <Carousel showThumbs={false}>
              {placePhotos.map((photo, index) => {
                return <CarouselSlide key={index} photo={photo} />
              })}
            </Carousel>
          </div>

          <div className='location-show-info'>

            <h1>{placeName}</h1>
            <h2>{placeDescription}</h2>

            <p>Has:
              {
                features.map((element, index) => {
                  return <span key={index}>{element}</span>
                })
              }
            </p>

            <p>Amenities:
              {
                amenities.map((amenity, index) => {
                  return <span key={index}>{amenity}</span>
                })
              }
            </p>
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
        </div>


        <LocationComments locationId={locationId} comments={comments} />

        <LocalPublic {...local} />
      </>
    )
  }

}

export default LocationShow