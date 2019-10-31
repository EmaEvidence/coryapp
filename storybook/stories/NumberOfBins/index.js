import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import NumberInput from '../common/NumberInput';
import CustomButton from '../common/CustomButton';
import { Button } from 'react-native-elements';
import { HomeStyle, CancelButton } from '../App';


class NumberOfBins extends Component {

  static navigationOptions = {
    headerTitle: () => (
      <View style={HomeStyle.header}>
        <Text style={HomeStyle.headerText}>
          # of Bins
        </Text>
      </View>
    ),
    headerRight: () => (
      <CancelButton />
    ),
  };

  render() {
    return (
        <View style={NumberOfBinsStyle.body}>
          <NumberInput />
          <CustomButton title="Next" onPress={() => {}} />
        </View>
    );
  }
}

const NumberOfBinsStyle = {
  body: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center'
  }
}

export default NumberOfBins;
