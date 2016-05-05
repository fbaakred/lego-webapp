import '../../Root.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAutomaticallyIfPossible } from 'app/actions/UserActions';
import Header from 'app/components/Header';
import NotificationContainer from 'app/components/NotificationContainer';

class App extends Component {
  componentWillMount() {
    this.props.loginAutomaticallyIfPossible();
  }

  render() {
    return (
      <div>
        <Header />
        <NotificationContainer />
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = { loginAutomaticallyIfPossible };

export default connect(
  null,
  mapDispatchToProps
)(App);
