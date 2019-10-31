import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

const BinDetailsHeader = ({ showSite }) => {
  return (
    <View style={BinDetailsHeaderStyle.body}>
      <View style={BinDetailsHeaderStyle.content}>
        <Text style={BinDetailsHeaderStyle.text}>Qty Sold</Text>
        <Text style={BinDetailsHeaderStyle.text}>0</Text>
      </View>
      <View style={BinDetailsHeaderStyle.content}>
        <Text style={BinDetailsHeaderStyle.text}>Sales</Text>
        <Text style={BinDetailsHeaderStyle.text}>$0.00</Text>
      </View>
      <View style={BinDetailsHeaderStyle.content}>
        {
          showSite && (
            <>
              <Text style={BinDetailsHeaderStyle.text}>Site</Text>
              <Text style={BinDetailsHeaderStyle.text}>SanJose</Text>
            </>
            )
        }
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
    height: 100
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
