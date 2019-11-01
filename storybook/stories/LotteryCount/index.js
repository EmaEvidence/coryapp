import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { HomeStyle, CancelButton } from '../App';
import NavBar from '../common/NavBar';
import BinDetailsHeader from '../common/BinDetailsHeader';
import Description from '../common/Description';
import BinDetails from '../common/BinDetails';
import BinDetailsFooter from '../common/BinDetailsFooter';

const emptyBins = [10];

class LotteryCount extends Component {
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
      <View style={LotteryCountStyle.body}>
        <NavBar title='Lottery Count' />
        <BinDetailsHeader
          qtySold={'0'}
          sales={'0'}
          site={''}
        />
        <Description
          emptyBins={[7]}
        />
        {/* <BinDetails
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
        /> */}
        <BinDetailsFooter
          bins={[1,2,3,4,5,6,7,8,9,10]}
          emptyBins={[7]}
          scannedBins={[]}
        />
      </View>
    );
  }
}

const LotteryCountStyle = {
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

export default LotteryCount;
