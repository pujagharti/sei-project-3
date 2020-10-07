import React from 'react'
import MapGL, { NavigationControl, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


class LocationsMap extends React.Component {

  state = {
    viewport: null
  }

  componentDidMount(){
    this.setState({
      viewport: {
        latitude: 45.5017,
        longitude: -73.5673,
        zoom: 13,
        width: '100%',
        height: '100vh'
      }
    })
  }

  addMarker(locationToAdd) {
    return <Popup
      key={locationToAdd._id}
      latitude={locationToAdd.coords[0].latitude}
      longitude={locationToAdd.coords[0].longitude}
    >
      <span role='img' aria-label='marker'>{locationToAdd.placeName}</span>
    </Popup>
  }


  render() {
    const { locationsData } = this.props
    const { viewport } = this.state
    return (
      <MapGL 
        { ...viewport }
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle='mapbox://styles/mapbox/outdoors-v11'
      >
        <div>
          <NavigationControl onViewportChange={(viewport) => this.setState({ viewport })}/>
        </div>
        {locationsData.map((location) => location.coords[0] ? this.addMarker(location) : null) }
      </MapGL>

    )
  }
}

export default LocationsMap

