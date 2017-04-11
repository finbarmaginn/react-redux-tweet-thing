import React from 'react';
import {connect} from 'react-redux';

import Me from './Me.jsx';
import WriteTweet from './WriteTweet.jsx'
import MapTweets from './MapTweets.jsx'
import {fetchTweets} from '../actions/tweetsActions.jsx';

@connect((store) => {
  return {
    fetchStatus: {
      fetching: store.tweets.fetching,
      fetched: store.tweets.fetched,
      errored: store.tweets.errored
    },
    error: store.tweets.error
  }
})

class App extends React.Component {
  componentWillMount() {
    this.fetchTweets();
  }

  fetchTweets(){
    this.props.dispatch(fetchTweets());
  }

  renderFetchStatus(fetchStatus) {
    if (fetchStatus.fetching) {
      return <p style={{"textAlign": "center"}}><img src="../src/imgs/ajax-loader.gif"/></p>
    }
    if (fetchStatus.fetched) {
      return <MapTweets />
    }
    if (fetchStatus.errored){
      return <div><p style={{"textAlign": "center"}}>Error Fetching Tweets</p><button onClick={this.fetchTweets.bind(this)}>retry</button></div>
    }
  }

  render() {

    return (
      <div id="wrap">
        <Me />
        <WriteTweet/>
        {this.renderFetchStatus(this.props.fetchStatus)}
      </div>
    )
  }
}

export default App;