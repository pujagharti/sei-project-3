import React from 'react'
import axios from 'axios'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

class ImageUpload extends React.Component {

  state = {
    image: null
  }

  handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const response = await axios.post(uploadUrl, data)
    try {
      this.setState({
        image: response.data.secure_url
      }, () => {
        this.props.onChange(this.state.image)
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { image } = this.state
    return (
      // <div>HelloImageUpload</div>
      <>
        {image ?
          <div style={{ width: '300px'}}>
            <img src={image} alt="selected" style={{ width:'100%', height: 'auto'}}/>
          </div>
          :
          <>
            <label className="label">{this.props.labelText || 'Profile Upload Image (10mb max)'}</label>
            <input
              className="input"
              type="file"
              onChange={this.handleUpload}
            />
          </>
        }
      </>
    )
  }
}

export default ImageUpload