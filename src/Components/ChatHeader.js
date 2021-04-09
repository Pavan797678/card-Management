import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

export default function ChatHeader(props) {
  const {headingText, _onPress, userImage,onlineStatus} = props;
  return (
    <View style={styles.mainContainerView}>
      <View>
        <TouchableOpacity onPress={_onPress}>
          <Image source={{uri: userImage}} style={styles.userProfile} />
        </TouchableOpacity>
      </View>
      <View style={styles.userNameView}>
        <Text style={styles.userNameText}>{headingText}</Text>
        {onlineStatus ?<Text style={styles.userNameText}>Online</Text>:<Text style={styles.userNameText}>Offline</Text>}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerView: {
    minHeight: 50,
    backgroundColor: colors.themeColor,
    flexDirection: 'row',

    alignItems: 'center',
  },
  userProfile: {
    height: 50,
    width: 50,
   marginHorizontal:20,
    borderRadius: 50,
    marginVertical: 10,
  },
  userNameView: {
    marginHorizontal: 10,
  },
  userNameText: {
    color:colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
