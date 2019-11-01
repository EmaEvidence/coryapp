import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import CustomButton from '../common/CustomButton';
import { HomeStyle, CancelButton } from '../App';
import { Input } from 'react-native-elements';

class Commission extends Component {
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
      <View style={CommissionStyle.body}>
        <View style={[HomeStyle.header, { height: '10%', flexDirection: 'row', justifyContent: 'space-around' }]}>
          <Text>
            Logo
          </Text>
          <Text style={[HomeStyle.headerText, ]}>
          </Text>
          <Text>
            Ham
          </Text>
        </View>
        <View style={CommissionStyle.content}>
          <Text>
            Commission rate
          </Text>
          <View style={CommissionStyle.inputHolder}>
            <Input
              inputStyle={{
                width: '50%',
                textAlign: 'center',
                fontSize3: 40,
              }}
              placeholder="0.00%"
              inputContainerStyle={{
                width: '30%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItem: 'center',
                marginBottom: 10
              }}
              containerStyle={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItem: 'center'
              }}
            />
            <Text>
              Rate
            </Text>
          </View>
          
          <CustomButton
            title="Next"
            onPress={() => {}}
            buttonStyle={{
              width: 150,
              height: 50
            }}
          />
        </View>
      </View>
    );
  }
}

const CommissionStyle = {
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
  inputHolder: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Commission;
