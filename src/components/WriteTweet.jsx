import React from 'react';
import {connect} from 'react-redux';
import TweetLength from './TweetLength.jsx';
import PreviewTweet from './PreviewTweet.jsx';
import {updateTweetState, pushTweet, fetchTweets} from "../actions/tweetsActions.jsx";

@connect((store) => {
  return {
    newTweet: store.tweets.newTweet
  }
})


class WriteTweet extends React.Component {
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

  handleSubmit() {
    if (this.props.newTweet.tweetLength > 0 && this.props.newTweet.tweetLength < 141) {
      this.props.dispatch(pushTweet(this.props.newTweet.tweet))
        .then(() => {
          return this.props.dispatch(fetchTweets());
        });
      this.props.dispatch(updateTweetState({val: "", tweetLength: 0, message: ""}));
    }
  }

  render() {
    const newTweet = this.props.newTweet;

    return (
      <form onSubmit={e => e.preventDefault()}>
        <textarea name="tweet" onChange={this.handleTweetChange.bind(this)} value={newTweet.tweet}/>
        <br />
        <button onClick={this.handleSubmit.bind(this)}>Post Tweet!</button>
        <TweetLength tweetLength={newTweet.tweetLength} tweetMessage={newTweet.message}/>
        <PreviewTweet preview={newTweet.tweet}/>
      </form>
    )

  }
}

export default WriteTweet;