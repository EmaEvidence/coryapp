import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NumberOfBins from '../NumberOfBins';
import SetUp from '../SetUp';
import { Button, Tile } from 'react-native-elements';

export const LogoTitle = () => {
  return (
    <View style={HomeStyle.header}>
      <Text style={HomeStyle.headerText}>
        Cory
      </Text>
    </View>
  )
}

export const CancelButton = ({ title }) => {
  return (
    <Button
      onPress={() => alert('This is a button!')}
      title={title || 'Cancel'}
      color="#fff"
      type="clear"
      titleStyle={{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '900'
      }}
    />
  )
} 

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <LogoTitle />,
    }
  };

  render() {
    return (
      <View style={HomeStyle.body}>
        <Button
          title="Go to SetUp"
          onPress={() => this.props.navigation.navigate('SetUp')}
        />
        <Button
          title="Go to Number of Bins"
          onPress={() => this.props.navigation.navigate('NumberOfBins')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SetUp,
    NumberOfBins
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffc30b',
        justifyContent: 'center',
        alignItems: 'center'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export const HomeStyle = {
  header: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffc30b',
    fontColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  body: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: '20%',
    marginBottom: 100
  }
}
export default createAppContainer(AppNavigator);
