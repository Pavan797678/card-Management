import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import ButtonWithImage from '../../Components/ButtonWithImage';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import validator from '../../utils/validations';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import api from '../../redux/actions/index';
import {showMessage, hideMessage} from 'react-native-flash-message';

import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';
import Loader from '../../Components/Loader';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userMobile: '',
      userPassword: '',
      isLoading: false,
      screenName: 'Login',
    };
  }

  _onChangeText(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }
  isValidData = () => {
    const {userMobile} = this.state;
    const error = validator({
      phoneNumber: userMobile,
     
    });
    if (error) {
      showMessage({
        type: 'danger',
        message: 'Please Enter Valid Mobile Number',
        icon: 'danger',
      });
      return false;
    }
    return true;
  };

  mainLogin = () => {
    const {userMobile, userPassword} = this.state;
    const {navigation} = this.props;
     if (this.isValidData()) {
    this.setState({
      isLoading: true,
    });
    api
      .login({
        contactDetails: {
          phoneNo: userMobile,
          countryCode: '+91',
          countryCodeISO: 'IN',
        },
      })
      .then(res => {
        console.log(JSON.stringify(res));

        this.setState({
          isLoading: false,
        });

        showMessage({
          type: 'success',
          message: 'Otp Send Successfully',
          icon: 'success',
        });
        navigation.navigate(navigationStrings.OTP_VERIFICATION, {
          userId: res.data.userId,
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });
        showMessage({
          type: 'danger',
          message: 'error',
          icon: 'danger',
        });

        console.log(JSON.stringify(error));
      });
     }
  };

  onmove = () => {
    const {navigation} = this.props;
    navigation.navigate(navigationStrings.SIGN_UP);
  };
  render() {
    const {isLoading, userMobile} = this.state;
    return (
      <WrapperContainer statusBarColor={colors.themeColor}>
        <View style={{flex: 1, backgroundColor: colors.white}}>
          <View
            style={{
              marginHorizontal: 15,
              marginTop: moderateScaleVertical(15),
            }}>
            <TextInputWithLabel
              label={'Mobile No'}
              placeholder={'Mobile No'}
              onChangeText={this._onChangeText('userMobile')}
              value={userMobile}
            />

            <View style={{alignItems: 'center'}}>
              <ButtonWithLoader btnText={'login'} onPress={this.mainLogin} />
            </View>
          </View>

          <View style={styles.socialRow}>
            <View style={styles.hyphen} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.hyphen} />
          </View>
          <View style={styles.socialButton}>
            <View
              style={{width: '46%', borderWidth: 1, borderColor: colors.blue}}>
              <ButtonWithImage
                imageSource={imagePath.fb}
                buttonText={'Facebook'}
                isImageVisiable={true}
                btnTextColor={colors.blue}
              />
            </View>
            <View
              style={{width: '46%', borderWidth: 1, borderColor: colors.red}}>
              <ButtonWithImage
                imageSource={imagePath.google}
                buttonText={'Google'}
                isImageVisiable={true}
                btnTextColor={colors.red}
              />
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={this.onmove}>
              <Text style={{...styles.txtSmall, color: colors.textGrey}}>
                New to HealthKart?
                <Text
                  style={{
                    color: colors.themeColor,
                  }}>
                  {' '}
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Loader isLoading={isLoading} />
      </WrapperContainer>
    );
  }
}
const styles = StyleSheet.create({
  hyphen: {
    width: 100,
    height: 1,
    backgroundColor: colors.textGrey,
    opacity: 0.6,
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScaleVertical(20),
  },
  orText: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',

    opacity: 0.6,
    marginTop: 0,
    marginHorizontal: moderateScale(16),
  },
  socialRowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(40),
    marginTop: moderateScaleVertical(20),
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScaleVertical(20),
  },
  socialButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
