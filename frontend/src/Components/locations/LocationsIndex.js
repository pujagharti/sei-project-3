import React from 'react'
import { Segment, Grid, Divider, Header, Dimmer, Loader } from 'semantic-ui-react'

import LocationCard from './LocationCard'
import LocationsMap from './LocationsMap'
import { locations } from '../../locations'

class LocationsIndex extends React.Component {

  state = {
    locationsData: []
  }

  constructor(props) {
    super(props)
    this.state = {
      scrollPosition: '0'
    }
  }

  changeScrollPosition = (newScrollPosition) => {
    this.setState({ scrollPosition: newScrollPosition })
  }

  async componentDidMount() {
    const res = locations
    const featureSelected = this.props.match.params.feature

    
    const filteredLocations = res.filter((location) => location.feature[0].toLowerCase() == featureSelected)

    this.setState({
      featureSelected: featureSelected,
      locationsData: filteredLocations
    })
  }

  render() {

    if (!this.state.locationsData) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )
    }

    const { feature } = this.props
    const { locationsData, featureSelected } = this.state

    return (

      <>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <Header style={{ fontSize: '25px' }}>{featureSelected.toUpperCase()} IN MONTREAL</Header>
        </Divider>

        <Segment style={{ padding: '0em 0em' }} vertical>
          <Grid >
              
              <Grid.Column>
                <Segment style={{ overflow: 'auto', maxHeight: '100%', paddingLeft: '100px', paddingRight: '100px' }}>
                  <div className='locations-index-container' style={{width: '100%', justifyContent: 'center', display:'flex', fontSize: '19px', height: '100%'}}>
                    <section className='locations-index-cards' style={{ display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
                      {
                        locationsData.map((location => {
                          return <LocationCard key={location._id} feature={feature} {...location} />
                        }))
                      }
                    </section>
                  </div>
                </Segment>
              </Grid.Column>
          </Grid>
        </Segment>

      </>

    )
  }
}
export default LocationsIndex