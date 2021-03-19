import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ButtonWithImage from '../../Components/ButtonWithImage';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';

export default class Login extends Component {
  onmove = () => {
    const {navigation} = this.props;
    navigation.navigate(navigationStrings.LOGIN);
  };
  gotoOtpScreen=()=>{
    const {navigation} = this.props;
    navigation.navigate(navigationStrings.OTP_VERIFICATION);
  }
  render() {
    return (
      <WrapperContainer statusBarColor={colors.themeColor}>
        <View style={{flex: 1, backgroundColor: colors.white}}>
          <View
            style={{
              marginHorizontal: 15,
              marginTop: moderateScaleVertical(15),
            }}>
          <Text style={{marginVertical:10}}>Your number is safemwith us. We won't share your details with anyone</Text>
            <TextInputWithLabel
              label="Mobile Number"
              placeholder="Mobile Number"
              secureTextEntry={true}
            />
            <View style={{alignItems:'center'}}>
              <ButtonWithLoader btnText={'Sign Up'} onPress={this.gotoOtpScreen}/>
            </View>
            <View style={styles.termsConditionContainer}>
            <TouchableOpacity onPress={this.onmove}>
              <Text style={{...styles.txtSmall, color: colors.textGrey}}>
               By signing up you agree to our 
                <Text
                  style={{
                    color: colors.themeColor,
                  }}>
                  {' '}
                  Terms & Conditions
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
          </View>

          <View style={styles.socialRow}>
            <View style={styles.hyphen} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.hyphen} />
          </View>
          <View
            style={styles.socialButton}>
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
               Already have an account?
                <Text
                  style={{
                    color: colors.themeColor,
                  }}>
                  {' '}
                  Sign In
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  socialButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 20,
    marginVertical: 20,
  }, termsConditionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
   
  }
});