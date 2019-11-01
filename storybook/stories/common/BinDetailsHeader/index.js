import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

const BinDetailsHeader = ({ qtySold, site, sales }) => {
  return (
    <View style={BinDetailsHeaderStyle.body}>
      <View style={BinDetailsHeaderStyle.content}>
        <Text style={BinDetailsHeaderStyle.text}>Qty Sold</Text>
        <Text style={BinDetailsHeaderStyle.text}>{qtySold}</Text>
      </View>
      <View style={BinDetailsHeaderStyle.content}>
        <Text style={BinDetailsHeaderStyle.text}>Sales</Text>
        <Text style={BinDetailsHeaderStyle.text}>${sales}</Text>
      </View>
      <View style={BinDetailsHeaderStyle.content}>
        <Text style={BinDetailsHeaderStyle.text}>Site</Text>
        <Text style={BinDetailsHeaderStyle.text}>{site}</Text>
      </View>
    </View>
  );
}

const BinDetailsHeaderStyle = {
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 70,
    borderWidth: 1,
    borderColor: 'grey',
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold'
  }
}

export default BinDetailsHeader;
