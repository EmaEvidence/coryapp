import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import LabeledInput from '../LabeledInput';

class BinDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  render() {
    const { bins, lastBinNumber, details } = this.props;
    return (
      <View style={BinDetailsStyle.body}>
        <Text style={BinDetailsStyle.detailsText}>
          Begin scanning Now
        </Text>
        <Text style={BinDetailsStyle.detailsText}>
          Last scanned bin - {lastBinNumber}
        </Text>
        <View style={BinDetailsStyle.inputContainer}>
          {
            details.map((bin) => {
              return (
                <LabeledInput
                  bin={bin}
                  inputContainer={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItem: 'flex-start',
                  }}
                />
              )
            })
          }
        </View>
      </View>
    );
  }
}

const BinDetailsStyle = {
  body: {
    display: 'flex',
    height: '10%',
    justifyContent: 'center',
    alignItem: 'flex-start',
    flex: 1,
    width: '100%'
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'flex-start',
    height: '70%',
    width: '100%'
  },
  detailsText: {
    textAlign: 'center',
    width: '100%'
  }
}

export default BinDetails;
