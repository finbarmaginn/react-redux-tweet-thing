import React from 'react'

class PreviewTweet extends React.Component {
  render() {
    return (
      <div id="preview">
        <h4>Preview:</h4>
        <p>{this.props.preview || " "}</p>
      </div>
    )
  }
}

export default PreviewTweet