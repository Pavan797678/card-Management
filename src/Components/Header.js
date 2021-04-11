import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';

import {useNavigation} from '@react-navigation/native';
import colors from '../styles/colors';
import {connect} from 'react-redux';
import CircularLoader from './Loaders/CircularLoader';

function Header(props) {
  const {searchVisible, _onChangeText, isLoading} = props;

  const navigation = useNavigation();

  const cartCount = props.data.length;

  if (searchVisible) {
    return (
      <View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.themeColor}
        />
        <View style={styles.headerBar}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={imagePath.drawer_icon}
                style={styles.drawerIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Image
              source={{
                uri: 'https://img10.hkrtcdn.com/10848/bnr_1084799_o.png',
              }}
              style={styles.amazonIcon}
              resizeMode="contain"
            />

            <View style={styles.miceCartIconView}>
              <TouchableOpacity
                style={styles.qrcodeView}
                onPress={() =>navigation.navigate(navigationStrings.QR_CODESCREEN)}>
                <Image
                  source={imagePath.qrcode}
                  style={styles.qrcodeImage}></Image>
              </TouchableOpacity>
              <Image
                source={imagePath.notification}
                style={styles.notificationIcon}
                resizeMode="contain"
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(navigationStrings.CARTPRODUCT);
                }}>
                <View>
                  <Text style={styles.cartCount}>{cartCount}</Text>
                  <Image
                    source={imagePath.cart}
                    style={styles.cartIcon}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.searchBarView}>
            <Image
              source={imagePath.search_icon}
              style={styles.searchIcon}
              resizeMode="contain"
            />
            <TextInput
              style={styles.searcTextInput}
              placeholder="Search"
              onChangeText={_onChangeText}></TextInput>
            <CircularLoader isLoading={isLoading} />
            <Image
              source={imagePath.microphone_icon}
              style={styles.cameraIcon}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.themeColor}
        />
        <View style={styles.headerBar1}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={imagePath.drawer_icon}
                style={styles.drawerIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Image
              source={{
                uri: 'https://img10.hkrtcdn.com/10848/bnr_1084799_o.png',
              }}
              style={styles.amazonIcon}
              resizeMode="contain"
            />
            <View style={styles.miceCartIconView}>
            <TouchableOpacity
                style={styles.qrcodeView}
                onPress={() =>navigation.navigate(navigationStrings.QR_CODESCREEN)}>
                <Image
                  source={imagePath.qrcode}
                  style={styles.qrcodeImage}></Image>
              </TouchableOpacity>
              <Image
                source={imagePath.notification}
                style={styles.notificationIcon}
                resizeMode="contain"
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(navigationStrings.CARTPRODUCT);
                }}>
                <View>
                  <Text style={styles.cartCount}>{cartCount}</Text>
                  <Image
                    source={imagePath.cart}
                    style={styles.cartIcon}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerBar: {
    height: 110,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  headerBar1: {
    height: 60,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logoView: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  searchBarView: {
    width: '95%',
    height: '40%',
    backgroundColor:colors.white,
    borderRadius: 5,
    elevation: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 'auto',
  },
  searchIcon: {
    height: 20,
    width: '7%',
  },
  cameraIcon: {
    height: 25,
    width: '7%',
  },
  searcTextInput: {
    width: '86%',
    height: 40,
    fontSize: 18,
    paddingVertical: 5,
  },
  drawerIcon: {
    height: 30,
    width: 30,
    marginVertical: 13,
    tintColor: colors.themeColor,
  },
  amazonIcon: {
    height: 50,
    width: 100,
    marginHorizontal: 20,
  },
  miceCartIconView: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  microphoneIcon: {
    height: 25,
    width: 25,
    marginHorizontal: 20,
  },
  cartIcon: {
    height: 50,
    width: 50,
    position: 'relative',
    tintColor: colors.themeColor,
  },
  notificationIcon: {
    height: 20,
    width: 20,
    right: '15%',
    position: 'relative',
    tintColor: colors.themeColor,
  },
  qrcodeImage: {
    height: 20,
    width: 20,
  },
  qrcodeView: {
    right: '50%',
    position: 'relative',
  },

  cartCount: {
    fontSize: 16,
    position: 'absolute',
    left: '45%',
    top: '15%',
    color:colors.red,
  },
});

const mapStateToProps = function (state) {
  return {
    data: state.carts.todo,
  };
};

export default connect(mapStateToProps)(Header);
