import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import strings from '../constants/lang';
import colors from '../styles/colors';

function Counter({data, onadd}) {
  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <View style={styles.productImageView}>
          <Image style={styles.productImage} source={{uri: data.image}}></Image>
        </View>
        <View style={styles.userNameView}>
          <Text style={styles.userNameText}> {data.name}</Text>
        </View>
      </View>

      <View style={styles.addToCartMainView}>
        <View style={styles.semiContainerView}>
          <View style={styles.addPost}>
            <TouchableOpacity onPress={() => onadd(data.id)}>
              <Text style={styles.addToCartText}>{strings.ADD_TO_CART}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: colors.lightGreyBg, // if you need
    borderWidth: 0.5,
    overflow: 'hidden',
    shadowColor: colors.black,
    marginHorizontal: 10,
    shadowRadius: 0.1,
    shadowOpacity: 0.5,
    borderRadius: 10,
  },
  headingView: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
  },
  bodyView: {
    marginHorizontal: 20,
  },
  addPost: {
    backgroundColor: colors.themeColor,

    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
  },
  addToCartMainView: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  semiContainerView: {
    width: '100%',
    alignItems: 'center',
  },
  userNameText: {fontSize: 18, color: colors.white},
  productImage: {height: 200, width: 200, resizeMode: 'contain'},
  userNameView: {
    flex: 0.6,
    marginHorizontal: 70,
    backgroundColor: colors.themeColor,
  },
  productImageView: {flex: 0.4},
  addToCartText: {color: colors.whiteText},
});

export default Counter;
