import React from 'react'
import axios from 'axios'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


class LocationsMap extends React.Component {

  state = {
    locationsData: null
  }

  addMarker(locationToAdd) {
    return <Marker key={locationToAdd._id}
      latitude={locationToAdd.coords[0].latitude}
      longitude={locationToAdd.coords[0].longitude}
    >
      <span role='img' aria-label='marker'>🏕</span>
    </Marker>
  }


  render() {
    const { locationsData } = this.props

    return (
      <MapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        className='locations-map'
        height={'30vh'}
        width={'30vw'}
        mapStyle='mapbox://styles/mapbox/dark-v10'
        latitude={56.1304}
        longitude={-106.3468}
        zoom={1}
      >
        {locationsData.map((location) => location.coords[0] ? this.addMarker(location) : null) }
      </MapGL>
    )
  }
}

export default LocationsMap

