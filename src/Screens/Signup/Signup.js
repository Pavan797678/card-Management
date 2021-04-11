import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ButtonWithImage from '../../Components/ButtonWithImage';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';

import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';

import styles from '../OuterScreen/styles';

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
          <Text style={{marginVertical:10}}>{strings.OTP_NOT_SHARE}</Text>
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
               {strings.AGGREE_WITH_TERMS_CONDITIONS}
                <Text
                  style={{
                    color: colors.themeColor,
                  }}>
                  {' '}
                 {strings.TERMS_CONDITIONS}
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
              style={styles.facebookImageView}>
              <ButtonWithImage
                imageSource={imagePath.fb}
                buttonText={'Facebook'}
                isImageVisiable={true}
                btnTextColor={colors.blue}
              />
            </View>
            <View
              style={styles.googleImageView}>
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
               {strings.ALREADY_HAVE_AN_ACCOUNT}
                <Text
                  style={{
                    color: colors.themeColor,
                  }}>
                  {' '}
                  {strings.LOGIN}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </WrapperContainer>
    );
  }
}
