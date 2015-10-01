import React, { Component/* , PropTypes */ } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';

import { fetchAll } from '../actions/EventActions';

import Overview from '../components/Overview';

@connect( (state) => ({
  events: state.events.items,
  loggedIn: state.auth.token !== null
}), { fetchAll })
export default class OverviewContainer extends Component {
  render() {
    return <Overview {...this.props}/>;
  }
}
