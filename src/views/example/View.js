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

import { ActionCreators as ExampleActions } from '../../store/ducks/Example';
import Styles from './Styles';

class Example extends Component {
  constructor(props) {
    super(props);

    this.getExample = this.getExample.bind(this);
  }

  getExample () {
    this.props.getExampleRequest();
  }

  render() {
    return (
      <View style={Styles.Container}>
        <Button title={'Teste'} onPress={this.getExample} />
        <Text>{this.props.example.data}</Text>
      </View>
    );
  }
}

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
