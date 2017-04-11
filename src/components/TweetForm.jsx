import React from 'react';

import {connect} from 'react-redux';
import {updateTweetState, pushTweet, fetchTweets} from "../actions/tweetsActions.jsx";

@connect((store) => {
  return {
    newTweet: store.tweets.newTweet
  }
})

class TweetForm extends React.Component {
  handleSubmit() {
    if (this.props.newTweet.tweetLength > 0 && this.props.newTweet.tweetLength < 141) {
      this.props.dispatch(pushTweet(this.props.newTweet.tweet))
        .then(() => {
          return this.props.dispatch(updateTweetState({val: "", tweetLength: 0, message: ""}))

        })
        .then(() => {
          return this.props.dispatch(fetchTweets())
        });

    }
  }

  handleTweetChange(e) {
    const tweet = e.target.value;
    const length = tweet.length;
    let message = "";

    if (length > 140) {
      message = " - Too Many Characters!";
    }

    const obj = {
      val: tweet,
      tweetLength: length,
      message: message
    };

    this.props.dispatch(updateTweetState(obj));
  }

  render() {
    const newTweet = this.props.newTweet;
    return (
      <div>
        <textarea name="tweet" onChange={this.handleTweetChange.bind(this)} value={newTweet.tweet}/>
        <br />
        <button onClick={this.handleSubmit.bind(this)}>Post Tweet!</button>
      </div>
    )
  }
}

export default TweetForm