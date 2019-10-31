import React from 'react';
import { View, Text } from 'react-native';
import { HomeStyle, CancelButton } from '../../App';

const NavBar = ({ title }) => {
  return (
    <>
      <View style={[HomeStyle.header, { height: '10%', flexDirection: 'row', justifyContent: 'space-around' }]}>
        <CancelButton title="Back" />
        <Text style={[HomeStyle.headerText, ]}>
          {title}
        </Text>
        <CancelButton />
      </View>
    </>
  );
}

export default NavBar;
