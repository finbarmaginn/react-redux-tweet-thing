import React from 'react';
import {connect} from 'react-redux';

import {fetchMe} from '../actions/meActions.jsx';

@connect((store) => {
  return {
    me: store.me.me,
    userFetched: store.me.fetched,
  }
})

class Me extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchMe())
  }

  render(){
    const {me} = this.props;
    return (
      <div>
        <h1>{me.name}</h1>
        <p>{me.age} | {me.id} | {me.email}</p>
      </div>
    )
  }
}

export default Me;