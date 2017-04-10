import React from 'react';

class TweetLength extends React.Component{
  render(){
    if(this.props.tweetLength > 140 || this.props.tweetLength < 1){
      return (
        <p className="tweetLength" style={{color: 'red'}}>Characters: {this.props.tweetLength || 0}{this.props.tweetMessage}</p>
      )
    } else {
      return (
        <p className="tweetLength" style={{color: 'green'}}>Characters: {this.props.tweetLength || 0}</p>
      )
    }
  }
}

export default TweetLength;