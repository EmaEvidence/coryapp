import React, { Fragment, Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Input, Button } from 'react-native-elements';
import LabeledInput from '../LabeledInput';

class BinDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
    this.handleOnpress = this.handleOnpress.bind(this);
  }

  render() {
    const { bins } = this.props;
    return (
      <View style={BinDetails.body}>
        <Text>
          {label}
        </Text>
        <Text>
          {label}
        </Text>
        <Text>
          {label}
        </Text>
        <View>
          {
            bins.map((bin) => {
              return (
                <LabeledInput
                  bin={bin}
                />
              )
            })
          }
        </View>
        <Input
          value={(this.state.value).toString()}
          inputStyle={BinDetails.input}
          containerStyle={BinDetails.inputContainer}
          inputContainerStyle={BinDetails.container}
          placeholder='1'
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

const BinDetailsStyle = {
  body: {
    display: 'flex',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center'
  },
  inputContainer: {
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center',
    marginBottom: 10
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center'
  },
  input: {
    width: '100%',
    textAlign: 'center',
    fontSize: 40,
    height: 150
  },
  buttonTitle: {
    fontSize: 40
  }
}

export default BinDetails;
