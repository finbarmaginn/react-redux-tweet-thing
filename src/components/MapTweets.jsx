import React from 'react';
import {connect} from 'react-redux';

@connect((store) => {
  return {
    tweets: store.tweets.tweets
  }
})

class MapTweets extends React.Component {
  render() {
    const {tweets} = this.props;
    const reversedTweets = tweets.reverse();
    const mappedTweets = reversedTweets.map((tweet, i) =>
      <li key={i}>
        <p>{String(tweet.text)}</p>
        <em>{tweet.id}</em>
      </li>
    );
    return (
      <ul>{mappedTweets}</ul>
    )
  }
}

export default MapTweets;