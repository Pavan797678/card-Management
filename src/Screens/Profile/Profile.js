import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../Components/Header';


import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import {onLogout} from '../../redux/actions/auth';
import store from '../../redux/store';
import colors from '../../styles/colors';
import {clearUserData} from '../../utils/utils';

class Profile extends Component {
  onLogout = () => {
    clearUserData();
    store.dispatch(onLogout());
  };

  render() {
    const {userData = {}} = this.props;

    return (
      <View style={{flex: 1}}>
        <Header />
        <View style={{flex: 1}}>
          <View style={styles.paymentDetailsView}>
            <View style={styles.userInfoView}>
              <Image style={styles.profileImage} source={imagePath.profile} />
              <View>
                <Text style={styles.priceDetails}>Pavan Sharma</Text>
                {userData === '' ? (
                  <></>
                ) : (
                  <Text>{userData.contactDetails.phoneNo}</Text>
                )}
              </View>
              <View style={styles.logoutButtonView}>
                <TouchableOpacity onPress={this.onLogout}>
                  <Text style={styles.LogoutButtonText}>{strings.LOGOUT}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paymentDetailsView: {
    height: '30%',
    marginHorizontal: 20,
    backgroundColor: colors.white,
    marginTop: 20,

    borderRadius: 10,
    elevation: 5,
  },
  priceDetails: {
    color: colors.textGreyB,
    fontSize: 18,
    marginTop: 15,
  },
  lineView: {
    height: 0.5,
    backgroundColor: colors.lightGreyBg,
    marginVertical: 5,
  },
  lineView1: {
    height: 120,
    width: 0.5,
    backgroundColor: colors.lightGreyBg,
    marginVertical: 5,
  },
  title: {
    fontSize: 15,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  price: {
    fontSize: 15,
    marginHorizontal: 15,

    color: colors.themeColor,
  },
  logoutButtonView: {
    width: '38%',
    justifyContent: 'center',
  },
  userInfoView: {
    flexDirection: 'row',
  },
  LogoutButtonText: {
    textAlign: 'right',
    fontSize: 20,
    marginHorizontal: 5,
  },
  profileImage: {
    height: 60,
    width: 60,
    marginHorizontal: 20,
  },
});
const mapStateToProps = state => {
  return {
    userData: state.authreducer.userData,
  };
};

export default connect(mapStateToProps)(Profile);
