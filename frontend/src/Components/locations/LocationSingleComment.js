import React from 'react'
import { Comment, Rating } from 'semantic-ui-react'
import { deleteComment } from '../../lib/api'

class LocationSingleComment extends React.Component {

  state = {
    showComment: true
  }

  handleDelete = async () => {
    const { _id, locationId } = this.props

    try {
      await deleteComment(locationId, _id)
      this.setState({
        showComment: false
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { text, rating, createdAt, currentUserProfile } = this.props
    const { username, userimage } = this.props.local
    const createdAtSliced = createdAt.slice(0, 10)

    if (!this.state.showComment) return null
    return (

      <>
        {this.state.showComment &&
          <Comment>
            <Comment.Avatar src={userimage} />
            <Comment.Content>
              <Comment.Author as='a'><span>{username}</span></Comment.Author>
              <Comment.Metadata>
                <div>{createdAtSliced}</div>
              </Comment.Metadata>
              <Comment.Text>{text}</Comment.Text>
              <Comment.Text>
                <Rating icon='heart' size='mini' maxRating={5} rating={rating} disabled />
              </Comment.Text>
              {currentUserProfile.username === username &&
                <Comment.Actions>
                  <Comment.Action
                    onClick={this.handleDelete}
                    style={{ color: 'orange' }}
                  >
                    Delete
                  </Comment.Action>
                </Comment.Actions>
              }
            </Comment.Content>
          </Comment>
        }

      </>
    )

  }


}

export default LocationSingleComment