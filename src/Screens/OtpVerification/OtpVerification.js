import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Platform,
} from 'react-native';

import navigationStrings from '../../constants/navigationStrings';
import api from '../../redux/actions/index';
import {showMessage, hideMessage} from 'react-native-flash-message';
import Loader from '../../Components/Loader';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';
import {
  moderateScaleVertical,
 
} from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import imagePath from '../../constants/imagePath';
import GradientButton from '../../Components/GradientButton';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import store from '../../redux/store';
import { getUserData,setUserData } from '../../utils/utils';


const CELL_COUNT = 5;
export default class OtpVerification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userOtp: '',
      isLoading: false,
    };

    console.log(this.state.userOtp);
  }

  _onChangeText(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }

  verifyOtp = () => {
    const {userId} = this.props.route.params;
    const {userOtp} = this.state;
    const {navigation} = this.props;
    this.setState({
      isLoading: true,
    });

    api
      .verifyOtp({
        userId,
        otp:userOtp,
        deviceToken:"123",
        registerFrom:Platform.OS.toUpperCase(),
      })
      .then(res => {

        this.setState({
          isLoading: false,
        });

        showMessage({
          type: 'success',
          message: 'Otp Verification Successful',
          icon: 'success',
        });

    

      
      
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });

        showMessage({
          type: 'danger',
          message: 'Otp Verification Faild',
          icon: 'danger',
        });
        console.log(JSON.stringify(error));
      });
  };

  

  render() {
    const {userOtp, isLoading} = this.state;
    const{navigation}=this.props
     
    return (
      <WrapperContainer statusBarColor={colors.themeColor}>
        <View style={styles.backContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack(null)}
            style={{alignSelf: 'flex-start'}}>
            <Image source={imagePath.back} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: moderateScaleVertical(88),
            
          }}>
          <Text style={styles.header}>{strings.OTP_VERIFICATION}</Text>
          <Text style={styles.txtSmall}>{strings.ENTER_OTP_SENT}</Text>
          <View style={{height: moderateScaleVertical(50)}} />
          <CodeField
            value={userOtp}
            onChangeText={this._onChangeText('userOtp')}
            cellCount={CELL_COUNT}
            rootStyle={styles.root}
            blurOnSubmit
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            selectionColor={colors.themeColor}
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <View style={{alignItems:'center'}}>
          <GradientButton
            onPress={this.verifyOtp}
            containerStyle={{marginTop: moderateScaleVertical(10)}}
            btnText={strings.VERIFY_ACCOUNT}
          />
          </View>
        </View>
        <Loader isLoading={isLoading}/>
      </WrapperContainer>
    );
  }
}
