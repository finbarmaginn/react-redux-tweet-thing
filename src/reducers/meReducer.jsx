const me = function reducer(state = {
                              me: {
                                name: null,
                                age: null,
                                id: null,
                                email: null
                              },
                              fetching: false,
                              fetched: false,
                              error: null
                            }, action) {
  switch (action.type) {

    case "FETCH_ME" : {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_ME_REJECTED" : {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_ME_FULFILLED" : {
      return {
        ...state,
        fetching: false,
        fetched: true,
        me: action.payload
      }
    }
  }
  return state;
}

export default me;