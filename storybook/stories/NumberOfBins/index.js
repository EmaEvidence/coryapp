import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import NumberInput from '../common/NumberInput';
import CustomButton from '../common/CustomButton';
import { HomeStyle, CancelButton } from '../App';
import NavBar from '../common/NavBar';



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
          <NavBar title='# of Bins' />
          <View style={NumberOfBinsStyle.content}>
            <NumberInput />
            <CustomButton title="Next" onPress={() => {}} />
          </View>
        </View>
    );
  }
}

const NumberOfBinsStyle = {
  body: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItem: 'flex-start'
  },
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
  }
}

export default NumberOfBins;
