import axios from "axios";

export function fetchTweets() {
  return {
    type: "FETCH_TWEETS",
    payload: axios.get("http://rest.learncode.academy/api/test123/tweets")
  }
}

export function pushTweet(val) {
  return {
    type: "POST_TWEET",
    payload: axios.post("http://rest.learncode.academy/api/test123/tweets", {
      text: val
    })
  }
/*
  return function (dispatch) {
    axios.post("http://rest.learncode.academy/api/test123/tweets", {
      text: val
    })
      .then((response) => {
        dispatch({type: "POST_TWEET_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "POST_TWEET_REJECTED", payload: err})
      })
  }
*/
}

export function updateTweetState(obj) {
  return {
    type: "UPDATE_TWEET_SUCCESS",
    payload: {
      tweet: obj.val,
      tweetLength: obj.tweetLength,
      message: obj.message
    }
  }
}

