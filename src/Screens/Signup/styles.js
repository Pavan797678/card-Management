import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateVerticalScale,
  moderateScale,
} from '../../styles/responsiveSize';

export default StyleSheet.create({
  header: {
    color: colors.black,
    fontSize: moderateScale(24),
    fontFamily: fontFamily.futuraBtHeavy,
    textAlign: 'center',
  },
  txtSmall: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    marginTop: moderateVerticalScale(15),
  },

  bottomContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: moderateVerticalScale(30),
  },
  guestBtn:{
    marginTop: moderateVerticalScale(20),
    backgroundColor: colors.lightSky,
    borderWidth: 0,
  },
  orText:{
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    opacity: 0.6,
    marginTop: 0,
    marginHorizontal: moderateScale(16),
  },hyphen: {
    width: 100,
    height: 1,
    backgroundColor: colors.textGrey,
    opacity: 0.6,
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(20),
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
    marginTop: moderateVerticalScale(20),
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateVerticalScale(20),
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
   
  },googleImageView:{
    width: '46%', borderWidth: 1, borderColor: colors.red
  },facebookImageView:{
    width: '46%', borderWidth: 1, borderColor: colors.blue
  }
});
