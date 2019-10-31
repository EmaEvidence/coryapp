import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';


export default function CustomButton({ onPress, title, buttonStyle }) {
  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={{
        width: '20%',
        alignSelf: 'center',
        ...buttonStyle
      }}
    />
  );
}
