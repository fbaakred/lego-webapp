import styles from './bdb.css';
import React, { Component } from 'react';
import BdbRightNav from './BdbRightNav';
import { Field } from 'redux-form';
import Button from 'app/components/Button';
import { TextInput } from 'app/components/Form';
import { selectColorCode, statusStrings } from '../utils.js';
import cx from 'classnames';

type Props = {
  addSemesterStatus: () => void,
  handleSubmit: () => void,
  companyId: string,
  submitting: boolean,
  autoFocus: any
};

export default class AddSemester extends Component {

  state = {
    semester: 0,
    contactedStatus: 6,
  }

  onSubmit({ year, contract }) {
    const companyId = this.props.companyId;
    this.props.addSemesterStatus({
      companyId,
      year,
      semester: this.state.semester,
      contactedStatus: this.state.contactedStatus,
      contract
    }, true);
  }

  setSemester = (semester) => {
    this.setState({ semester });
  };

  setContactedStatus = (event) => {
    this.setState({
      contactedStatus: event.target.value
    });
  }

  props: Props;

  render() {
    const {
      companyId,
      submitting,
      autoFocus
    } = this.props;

    return (
      <div className={styles.root}>

        <h1>Legg til semester</h1>

        <div className={styles.detail}>
          <div className={styles.leftSection}>

            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>

              <Field
                placeholder={'År'}
                autoFocus={autoFocus}
                name='year'
                component={TextInput.Field}
                className={styles.yearForm}
              />

              <div className={styles.choices}>
                <h3>Semester</h3>
                <input
                  type='radio'
                  value
                  name='semester'
                  checked={this.state.semester === 0}
                  onChange={this.setSemester.bind(this, 0)}
                  id='var'
                /><label htmlFor='var'>Vår<br /></label>
                <input
                  type='radio'
                  value={false}
                  name='semester'
                  checked={this.state.semester === 1}
                  onChange={this.setSemester.bind(this, 1)}
                  id='host'
                /><label htmlFor='host'>Høst<br /></label>
              </div>

              <select
                name={'contactedStatus'}
                value={this.state.contactedStatus}
                onChange={this.setContactedStatus}
                className={cx(styles[selectColorCode(this.state.contactedStatus)],
                styles.contactedStatusForm)}
              >
                {Object.keys(statusStrings).map((statusString, j) => (
                  <option key={j} value={statusString}>{statusStrings[j]}</option>
                ))}
              </select>

              <Field
                placeholder={'Kontrakt for dette semesteret'}
                autoFocus={autoFocus}
                name='contract'
                component={TextInput.Field}
                className={styles.contractForm}
              />

              <div className={styles.clear} />

              <Button
                className={styles.submit}
                disabled={submitting}
                submit
                style={{ marginBottom: '0!important' }}
              >
                Lagre
              </Button>

            </form>

          </div>

          <BdbRightNav
            {...this.props}
            companyId={companyId}
          />

        </div>
      </div>
    );
  }
}
