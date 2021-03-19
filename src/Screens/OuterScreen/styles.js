import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScaleVertical,
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
    marginTop: moderateScaleVertical(15),
  },
  socialRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialRowBtn:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScaleVertical(40),
  },
  hyphen:{
    width: 20,
    height: 1,
    backgroundColor: colors.textGrey,
    opacity: 0.6,
  },
  bottomContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: moderateScaleVertical(30),
  },
  guestBtn:{
    marginTop: moderateScaleVertical(20),
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
  },
  alreadyText:{
    color: colors.textGreyLight,
    marginTop: 0,
  },
  login:{
    color: colors.themeColor,
    fontFamily: fontFamily.futuraBtHeavy,
  }
});
