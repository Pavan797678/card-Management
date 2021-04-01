import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import colors from '../../styles/colors';

export default function CircularLoader({isLoading}) {
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color={colors.themeColor} />
      </View>
    );
  } else {
    return <></>;
  }
}
