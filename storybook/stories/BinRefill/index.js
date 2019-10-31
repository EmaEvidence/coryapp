import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import CustomButton from '../common/CustomButton';
import { HomeStyle, CancelButton } from '../App';
import NavBar from '../common/NavBar';

const bins = [1,2,3,4,5,6,7,8,9,10];

class BinRefill extends Component {
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
      <View style={BinRefillStyle.body}>
        <NavBar title='Bin Setup' />
        <View style={BinRefillStyle.content}>
          <Text>
            Select bin number to Refill
          </Text>
          <View style={BinRefillStyle.buttonHolder}>
            {
              bins.map((bin) => {
                return (
                  <CustomButton
                    title={bin}
                    buttonStyle={{
                      width: 40,
                      alignSelf: 'center',
                      margin: 20,
                      backgroundColor: 'red'
                    }}
                  />
                )
              })
            }
          </View>
          <View style={BinRefillStyle.doneContainer}>
            <Text>
              Select Done when finished
            </Text>
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

const BinRefillStyle = {
  body: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonHolder: {
    display: 'flex',
    width: '60%',
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderColor: 'red',
  },
  doneContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

export default BinRefill;
