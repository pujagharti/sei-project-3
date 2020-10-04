import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { getSingleLocation } from '../../lib/api'
import CarouselSlide from './CarouselSlide'
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

    const { placePhotos, placeName, placeDescription, amenities, local } = this.state.locationData
    const features = this.state.locationData.feature
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
                  return <div key={index}>{element}</div>
                })
              }
            </p>

            <p>Amenities:
              {
                amenities.map((amenity, index) => {
                  return <div key={index}>{amenity}</div>
                })
              }
            </p>
          </div>
        </div>

        <LocalPublic { ...local }/>      
      </>
    )
  }

}

export default LocationShow