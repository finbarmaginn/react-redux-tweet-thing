const tweets = function reducer(state = {
                                  tweets: [],
                                  newTweet: {
                                    tweet: "",
                                    tweetLength: 0,
                                    message:""
                                  },
                                  fetching: false,
                                  fetched: false,
                                  error: null,
                                }, action) {
  switch (action.type) {
    case "FETCH_TWEETS": {
      return {...state, fetching: true}
    }
    case "FETCH_TWEETS_REJECTED": {
      return {...state, fetching: false, error: action.payload};
    }
    case "FETCH_TWEETS_FULFILLED": {
      return {...state, fetching: false, fetched: true, tweets: action.payload}
    }
    case "UPDATE_TWEET_SUCCESS": {
      return {...state, newTweet: action.payload}
    }
  }
  return state;
}

export default tweets
