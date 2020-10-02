import React from 'react'

import { getLocations } from '../../lib/api'
import LocationCard from './LocationCard'

class LocationsIndex extends React.Component {

  state = {
    locationsData: [
      {
        placeName: 'Wisconsin',
        placeDescription: 'A modern glamping experience in the heart of amazing woodland',
        placePhoto: ['https://imageresizer.static9.net.au/AecMpvdvP4gXYrkC3B-LZUlP2nA=/400x0/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2018%2F02%2F06%2F14%2F34%2FINTRO.jpg',
          'https://img.huffingtonpost.com/asset/5cd5264a2000005c00969e0a.jpeg?ops=scalefit_720_noupscale',
          'https://img.theculturetrip.com/768x432/wp-content/uploads/2017/05/31746323273_f84b91b9b2_b.jpg'],
        amenities: ['shower', 'lake access', 'mornign wake-up'],
        eventDate: '',
        location: {
          lat: '51.5074',
          long: '0.1227'
        },
        feature: ['glamping']
      },
      {
        placeName: 'Wisconsin',
        placeDescription: 'A modern glamping experience in the heart of amazing woodland',
        placePhoto: ['https://imageresizer.static9.net.au/AecMpvdvP4gXYrkC3B-LZUlP2nA=/400x0/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2018%2F02%2F06%2F14%2F34%2FINTRO.jpg',
          'https://img.huffingtonpost.com/asset/5cd5264a2000005c00969e0a.jpeg?ops=scalefit_720_noupscale',
          'https://img.theculturetrip.com/768x432/wp-content/uploads/2017/05/31746323273_f84b91b9b2_b.jpg'],
        amenities: ['shower', 'lake access', 'mornign wake-up'],
        eventDate: '',
        location: {
          lat: '51.5074',
          long: '0.1227'
        },
        feature: ['glamping']
      },
      {
        placeName: 'Wisconsin',
        placeDescription: 'A modern glamping experience in the heart of amazing woodland',
        placePhoto: ['https://imageresizer.static9.net.au/AecMpvdvP4gXYrkC3B-LZUlP2nA=/400x0/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2018%2F02%2F06%2F14%2F34%2FINTRO.jpg',
          'https://img.huffingtonpost.com/asset/5cd5264a2000005c00969e0a.jpeg?ops=scalefit_720_noupscale',
          'https://img.theculturetrip.com/768x432/wp-content/uploads/2017/05/31746323273_f84b91b9b2_b.jpg'],
        amenities: ['shower', 'lake access', 'mornign wake-up'],
        eventDate: '',
        location: {
          lat: '51.5074',
          long: '0.1227'
        },
        feature: ['glamping']
      },
      {
        placeName: 'Wisconsin',
        placeDescription: 'A modern glamping experience in the heart of amazing woodland',
        placePhoto: ['https://imageresizer.static9.net.au/AecMpvdvP4gXYrkC3B-LZUlP2nA=/400x0/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2018%2F02%2F06%2F14%2F34%2FINTRO.jpg',
          'https://img.huffingtonpost.com/asset/5cd5264a2000005c00969e0a.jpeg?ops=scalefit_720_noupscale',
          'https://img.theculturetrip.com/768x432/wp-content/uploads/2017/05/31746323273_f84b91b9b2_b.jpg'],
        amenities: ['shower', 'lake access', 'mornign wake-up'],
        eventDate: '',
        location: {
          lat: '51.5074',
          long: '0.1227'
        },
        feature: ['glamping']
      }
    ]
  }


  async componentDidMount() {

    // const res = await getLocations()

    // this.setState({
    //   locationsData: res.data
    // })
  }

  render() {

    if (!this.state.locationsData) return <h1>Let me just get that for you</h1>

    const { feature } = this.props
    const { locationsData } = this.state

    return (

      locationsData.map((location => {
        return <LocationCard key={location._id} feature={feature} {...location} />
      }))

    )
  }
}


export default LocationsIndex