import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements'

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  render() {
    const { question, options } = this.props;
    return (
      <View style={QuestionStyle.body}>
        <Text style={QuestionStyle.text}>
          {question}
        </Text>
        <View>
          {
            options.map((option) => {
              return (
                <View>
                  <CheckBox
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                    title={option.value}
                  />
                </View>
              )
            })
          }
        </View>
      </View>
    );
  }
}

const QuestionStyle = {
    body: {
        display: 'flex',
        height: '50%',
        width: '100%',
        justifyContent: 'flex-start',
        padding: 20
    },
    text: {
        textAlign: 'left'
    }
}

export default Question;
