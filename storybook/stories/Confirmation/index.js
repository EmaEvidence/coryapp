import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import CustomButton from '../common/CustomButton';
import { HomeStyle, CancelButton } from '../App';
import NavBar from '../common/NavBar';

const emptyBins = [10];

class Confirmation extends Component {
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
      <View style={ConfirmationStyle.body}>
        <NavBar title='Confirmation' />
        <View style={ConfirmationStyle.content}>
          <View style={ConfirmationStyle.textHolder}>
            <Text>
              Please confirm that all bins have been scanned and that the bins shown below are empty.
            </Text>
            <Text>
              If a bin shown is not empty, select the bin number abd scan the last ticket in the bin.
            </Text>
            <Text>
              If the bin shown below is empty then select Done.
            </Text>
          </View>
          <View style={ConfirmationStyle.buttonHolder}>
            <Text>
              Empty bins
            </Text>
            {
              emptyBins.map((bin) => {
                return (
                  <CustomButton
                    title={bin}
                    buttonStyle={{
                      width: 40,
                      alignSelf: 'center',
                      backgroundColor: 'red'
                    }}
                  />
                )
              })
            }
          </View>
          <View style={ConfirmationStyle.doneContainer}>
            <CustomButton
              title="Done"
              onPress={() => {}}
              buttonStyle={{
                width: 150,
                height: 50
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const ConfirmationStyle = {
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

export default Confirmation;
