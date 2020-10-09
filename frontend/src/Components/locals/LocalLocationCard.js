import React from 'react'
import { Link } from 'react-router-dom'
import { Popup, Card, Rating, Grid, Button } from 'semantic-ui-react'

import { deleteLocation } from '../../lib/api'


class LocalLocationCard extends React.Component {

  state = {
    renderLocation: true,
    showConfirmDelete: false
  }

  divStyle = {
    backgroundImage: `url(${this.props.placePhotos})`,
    width: '100%',
    height: '200px',
    borderRadius: '5px',
    backgroundSize: 'cover'
  }

  handleFirstDeleteClick = () => {
    this.setState({
      showConfirmDelete: true
    })

    setTimeout(() => {
      this.setState({
        showConfirmDelete: false
      })
    }, 3000)
  }

  confirmDelete = async () => {
    try {
      await deleteLocation(this.props._id)

      this.setState({
        renderLocation: false
      })
    } catch (err) {
      console.log(err)
    }
  }

 

  render() {

    const { _id, placeName, placeDescription, avgRating } = this.props

    return (
      <>
        { this.state.renderLocation &&
          <Grid.Column width={4}>
            <Popup
              trigger={
                <Card className='popup-card'>
                  <Link
                    to={`/locations/${_id}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <div style={this.divStyle}></div>
                  </Link>
                  <Card.Content>
                    <Card.Header>{placeName}</Card.Header>
                    <Card.Description className='local-place-description'>
                      {placeDescription.slice(0, 40)}...
                      {!this.state.showConfirmDelete &&
                      <Button
                        onClick={this.handleFirstDeleteClick}
                        floated='right'
                        color='orange'
                      >
                        Delete</Button>
                      }
                      {this.state.showConfirmDelete &&
                      <Button
                        onClick={this.confirmDelete}
                        floated='right'
                        color='red'
                      >
                        Sure?</Button>
                      }
                    </Card.Description>
                  </Card.Content>
                </Card>
              }
            >
              <Popup.Header>Community Rating</Popup.Header>
              <Popup.Content>
                <Rating icon='heart' defaultRating={avgRating} maxRating={5} disabled />
              </Popup.Content>
            </Popup>
          </Grid.Column>
        }
      </>
    )
  }


}

export default LocalLocationCard
