import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

const Description = () => {
  return (
    <View style={DescriptionStyle.textHolder}>
      <Text>
        Please confirm that all bins have been scanned and that the bins shown below are empty.
      </Text>
      <Text>
        If a bin shown is not empty, select the bin number abd scan the last ticket in the bin.
      </Text>
      <Text>
        If the bin shown below is empty then select Done.
      </Text>
      <View style={DescriptionStyle.emptyBinHolder}>
        <Text>Empty Bins</Text>
        <CustomButton
          title='7'
          onPress={() => {}}
          buttonStyle={{
            width: 50,
            height: 50,
            backgroundColor: 'red'
          }}
        />
      </View>
    </View>
  );
}

const DescriptionStyle = {
  textHolder: {
    height: '20%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    flex: 1
  },
  emptyBinHolder: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginTop: 50,
    width: '100%'
  }
}

export default Description;
