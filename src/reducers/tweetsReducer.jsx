const tweets = function reducer(state = {
                                  tweets: [],
                                  newTweet: {
                                    tweet: "",
                                    tweetLength: 0,
                                    message: ""
                                  },
                                  fetching: false,
                                  fetched: false,
                                  posting: false,
                                  posted: false,
                                  errored:false,
                                  error: null,
                                }, action) {
  switch (action.type) {
    case "FETCH_TWEETS_PENDING": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_TWEETS_REJECTED": {
      return {
        ...state,
        fetching: false,
        errored:true,
        error: action.payload
      }
    }
    case "FETCH_TWEETS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        errored:false,
        tweets: action.payload.data
      }
    }
    case "UPDATE_TWEET_SUCCESS": {
      return {
        ...state,
        newTweet: action.payload,
        errored: false
      }
    }
    case "UPDATE_TWEET_REJECTED": {
      return {
        ...state,
        errored:true,
        error: action.payload
      }
    }
    case "POST_TWEET_PENDING": {
      return {
        ...state,
        posting: true
      }
    }
    case "POST_TWEET_FULFILLED": {
      return {...state,
        errored:false,
        posted: true,
        posting: false
      }
    }
    case "POST_TWEET_REJECTED": {
      return {
        ...state,
        posted: false,
        posting: false,
        errored:true,
        error: action.payload
      }
    }
  }
  return state;
};

export default tweets
