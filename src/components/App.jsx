import React from 'react';
import {connect} from 'react-redux';

import Me from './Me.jsx';
import WriteTweet from './WriteTweet.jsx'
import {fetchTweets} from '../actions/tweetsActions.jsx';

@connect((store) => {
  return {
    tweets: store.tweets.tweets
  }
})

class App extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchTweets());
  }

  render() {
    const {tweets} = this.props;
    const reversedTweets = tweets.reverse();
    const mappedTweets = reversedTweets.map((tweet, i) =>
      <li key={i}>
        <p>{String(tweet.text)}</p>
        <i>{tweet.id}</i>
      </li>
    );
    return (
      <div id="wrap">
        <Me />
        <WriteTweet/>
        <ul>{mappedTweets}</ul>
      </div>
    )
  }
}

export default App;