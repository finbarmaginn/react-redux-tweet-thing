import React from 'react';
import {connect} from 'react-redux';
import TweetForm from './TweetForm.jsx';
import TweetLength from './TweetLength.jsx';
import PreviewTweet from './PreviewTweet.jsx';

@connect((store) => {
  return {
    postStatus: {
      posting: store.tweets.posting,
      posted: store.tweets.posted,
      errored: store.tweets.errored
    },
    newTweet: store.tweets.newTweet
  }
})

class WriteTweet extends React.Component {
  renderPostStatus(postStatus) {
    if (postStatus.errored) {
      return (
        <fieldset>
          <TweetForm/>
          <h5 style={{color: "red"}}>Posting Error</h5>
        </fieldset>
      )
    }
    if (postStatus.posting) {
      return (
        <fieldset disabled>
          <TweetForm/>
          <img src="../src/imgs/ajax-loader.gif" />
        </fieldset>
      )
    }
    if (postStatus.posted) {
      return (
        <fieldset>
          <TweetForm/>
        </fieldset>
      )
    }
    return (
      <fieldset>
        <TweetForm/>
      </fieldset>
    )
  }

  render() {
    const newTweet = this.props.newTweet;

    return (
      <form onSubmit={e => e.preventDefault()}>
        {this.renderPostStatus(this.props.postStatus)}
        <TweetLength tweetLength={newTweet.tweetLength} tweetMessage={newTweet.message}/>
        <PreviewTweet preview={newTweet.tweet}/>
      </form>
    )

  }
}

export default WriteTweet;