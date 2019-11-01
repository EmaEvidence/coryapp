import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

const bins = [
  {
    value: 1,
    isOpen: true
  },
  {
    value: 2,
    isOpen: true
  },
  {
    value: 3,
    isOpen: true
  },
  {
    value: 4,
    isOpen: true
  },
  {
    value: 5,
    isOpen: true
  },
  {
    value: 6,
    isOpen: true
  },
  {
    value: 7,
    isOpen: true
  },
  {
    value: 8,
    isOpen: true
  },
  {
    value: 9,
    isOpen: false
  },
  {
    value: 10,
    isOpen: true
  },
]
const BinDetailsFooter = ({ showSite }) => {
  return (
    <View style={BinDetailsFooterStyle.body}>
      <View style={[BinDetailsFooterStyle.content, , { justifyContent: 'flex-start' }]}>
        <Text style={BinDetailsFooterStyle.text}>Please scan next bin: 2</Text>
        <Text style={BinDetailsFooterStyle.text}>Unscanned bins: 9</Text>
      </View>
      <View style={[BinDetailsFooterStyle.content, { justifyContent: 'flex-end' }]}>
        <CustomButton
          title="Done"
          onPress={() => {}}
          buttonStyle={{
            width: 150,
            height: 50
          }}
        />
      </View>
      <View style={BinDetailsFooterStyle.buttonHolder}>
        {
          bins.map((bin) => {
            return (
              <CustomButton
                title={bin.value}
                onPress={() => {}}
                buttonStyle={{
                  width: 35,
                  height: 35,
                  margin: 2,
                  backgroundColor: bin.isOpen ? 'green' : 'red'
                }}
              />
            )
          })
        }
      </View>
    </View>
  );
}

const BinDetailsFooterStyle = {
  body: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 300
  },
  contentHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonHolder: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default BinDetailsFooter;
