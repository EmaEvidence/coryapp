import React, { Fragment, Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Input, Button } from 'react-native-elements';

class LabeledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  render() {
    const { label, value, mode } = this.props.bin;
    return (
      <View style={NumberInputStyle.body}>
        <Text>
          {label}
        </Text>
        <Input
          // value={(value).toString()}
          inputStyle={NumberInputStyle.input}
          containerStyle={NumberInputStyle.inputContainer}
          inputContainerStyle={NumberInputStyle.container}
          placeholder={label}
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

const NumberInputStyle = {
  body: {
    display: 'flex',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  },
  inputContainer: {
    width: '60%',
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
    textAlign: 'left',
    fontSize: 20,
    height: 150,
    paddingBottom: 20
  },
  buttonTitle: {
    fontSize: 40
  }
}

export default LabeledInput;
