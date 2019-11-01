import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Question from '../common/Question';
import CustomButton from '../common/CustomButton';
import { HomeStyle, CancelButton } from '../App';
import NavBar from '../common/NavBar';


class SetUp extends Component {
  static navigationOptions = {
    headerTitle: () => (
      <View style={HomeStyle.header}>
        <Text style={HomeStyle.headerText}>
          SetUp
        </Text>
      </View>
    ),
    headerRight: () => (
      <CancelButton />
    ),
  };

  render() {
    return (
      <View>
        <NavBar title='Set Up' />
        <Question options={[{ value: 'Ascending' }, { value: 'Decending' }]} question='Does store scan tickets from the back of the roll or the front of the roll' />
        <CustomButton title="Next" onPress={() => {}} />
      </View>
    );
  }
}

export default SetUp;
