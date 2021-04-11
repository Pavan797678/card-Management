import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Button} from 'react-native';
import strings from '../constants/lang';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

const {height, width} = Dimensions.get('screen');

export default function NearByUsersList({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.cartItemView}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: colors.lightSky,
            }}>
            <Text style={commonStyles.futuraBtHeavyFont14}>BirthDay</Text>
            <Text style={commonStyles.futuraBtHeavyFont14}>
              {data.dob.date}-{data.dob.month}-{data.dob.year}
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.userImage}
              source={{uri: data.profileImg[0].original}}></Image>
            <View style={styles.userName}>
              <Text style={firstNameText}>{data.firstName}</Text>
              <Text style={commonStyles.futuraBtHeavyFont16}>
                {data.gender}
              </Text>
              <Text style={commonStyles.futuraBtHeavyFont14}>
                {data.addressDetails.city}
              </Text>
            </View>
          </View>
          <View style={styles.FollowTextView}>
            <Text style={{color: colors.white}}>{strings.FOLLOW}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  cartItemView: {
    height: height / 3.5,
    width: width / 2.2,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  userImage: {
    width: 110,
    height: 110,
    borderRadius: 100,
    resizeMode: 'contain',
    marginTop: 10,
  },

  userName: {
    alignItems: 'center',
  },
  websiteDetail: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonView: {
    marginTop: 10,
    height: '18%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    marginHorizontal: 20,
  },
  buttonContentText: {
    color: colors.white,
  },
  FollowTextView: {
    backgroundColor: colors.themeColor,
    marginHorizontal: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstNameText: {fontSize: 16, fontWeight: 'bold', color: colors.black},
});
