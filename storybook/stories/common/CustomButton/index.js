import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';


export default function CustomButton({ onPress, title }) {
  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={{
        width: '20%',
        alignSelf: 'center'
      }}
    />
  );
}
