import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

const {height, width} = Dimensions.get('window');

function ChatsList({data,goToChatScreen}) {
  return (
    <View>
      <TouchableOpacity onPress={()=>goToChatScreen(data)}>
        <View style={styles.postContainer}>
          <View style={styles.imageParentView}>
            <Image
              style={styles.userImage}
              source={{uri: data.userInfo.profileImg[0].original}}
            />
          </View>

          <View style={styles.contentParentView}>
            <View>
              <Text style={styles.usernameText}>{data.userInfo.fullName}</Text>
              <Text style={styles.messageText}>{data.userInfo.bio}</Text>
            </View>
           
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
  },

  usernameText: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  imageParentView: {
    flex: 2.5,
  },
  userImage: {
    height: 60,
    width: 60,
    left: 10,
    borderRadius: 50,
    marginVertical: 10,
  },
  messageText: {
    fontSize: 13,
    marginTop: 5,
  },
  outgoingCallImage: {
    height: 20,
    width: 20,
    marginVertical: 30,
    marginRight: 10,
  },
  contentParentView: {
    flex: 8.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default ChatsList;
