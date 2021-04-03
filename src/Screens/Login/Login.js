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
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import { GoogleSignin, statusCodes ,GoogleSigninButton} from '@react-native-google-signin/google-signin';
GoogleSignin.configure();

import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';
import Loader from '../../Components/Loader';
import {setUserData} from '../../utils/utils';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userMobile: '',
      userPassword: '',
      isLoading: false,
      screenName: 'Login',
      userInfo: {},
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

  loginWithFacebook = () => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            this.getInfoFromToken(accessToken);
          });
        }
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };
  // onLogoutFinished=() => this.setState({userInfo: {}})

  getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name,  first_name, last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          this.setState({userInfo: result});
          console.log('result:', result);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };


  _signIn = async () => {
    
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
      alert(JSON.stringify(userInfo))
      
    } catch (error) {
     
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('in cancle method')
       
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        
      } else {
        // some other error happened
       
        alert(error)
      }
    }
  };

  render() {
    const {isLoading, userMobile, userInfo} = this.state;
    console.log(userInfo);

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
                onUserPress={this.loginWithFacebook}
              />
            </View>
            <View
              style={{width: '46%', borderWidth: 1, borderColor: colors.red}}>
              <ButtonWithImage
                imageSource={imagePath.google}
                buttonText={'Google'}
                isImageVisiable={true}
                btnTextColor={colors.red}
                onUserPress={this._signIn}
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
          {this.state.userInfo.name && (
            <Text
              style={{fontSize: 16, marginVertical: 16, color: colors.black}}>
              Logged in As {this.state.userInfo.name}
            </Text>
          )}
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
