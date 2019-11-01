import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { HomeStyle, CancelButton } from '../App';
import NavBar from '../common/NavBar';
import BinDetails from '../common/BinDetails';
import CustomButton from '../common/CustomButton';

const emptyBins = [10];

class ExpiredRoll extends Component {
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
      <View style={ExpiredRollStyle.body}>
        <NavBar title='Expired Roll' />
        <BinDetails
          details={[
            {
              label: 'Game Number',
              value: '0'
            },
            {
              label: 'Pack Number',
              value: '0'
            },
            {
              label: 'Open Number',
              value: '0'
            },
            {
              label: 'Close Number',
              value: '0'
            },
            {
              label: 'Ticket Value',
              value: '0'
            },
            {
              label: 'Game Name/Description',
              value: '0'
            }
          ]}
        />
        <CustomButton
          title="Next"
          onPress={() => {}}
          buttonStyle={{
            width: 150,
            height: 50
          }}
        />
      </View>
    );
  }
}

const ExpiredRollStyle = {
  body: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    flex: 1,
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonHolder: {
    display: 'flex',
    width: '100%',
    height: '20%',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  doneContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  textHolder: {
    height: '20%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  }
}

export default ExpiredRoll;
