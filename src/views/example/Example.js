/**
 * @author Juliano Bento <bento.js.it@gmail.com>
 * @copyright RN-Boilerplate
 * @version 1.0.0
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ExampleActions } from '../../store/ducks/Example';
import I18n from '../../../i18n';
import Styles from './Styles';

/**
 * @desc class example used to show a button and a label bellow
 * @property {Object} example - example is a value to be show below the button test
 */
class Example extends Component {
  constructor(props) {
    super(props);

    this.getExample = this.getExample.bind(this);
  }
  /**
   * @desc call a reducer to request data example
   * @return {void} - returns nothing
   */
  getExample () {
    this.props.getExampleRequest();
  }

  /**
   * @desc render an element
   * @return {Object} - react element
   */
  render() {
    return (
      <View style={Styles.Container}>
        <Button title={I18n.t('test')} onPress={this.getExample} />
        <Text>{this.props.example.data}</Text>
      </View>
    );
  }
}

/**
 * propTypes
 * @property {Object} - example object from Example reducer
 * @property {Function} - getExampleRequest from action creator
 */
Example.propTypes = {
  example: PropTypes.object.isRequired,
  getExampleRequest: PropTypes.func.isRequired
}

Example.defaultProps = {}

const mapStateToProps = state => ({
  example: state.example,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ExampleActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
