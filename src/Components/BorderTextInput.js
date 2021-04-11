import React, {useEffect} from 'react';
import {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import colors from '../styles/colors';
import commonStyles, {hitSlopProp} from '../styles/commonStyles';
import {moderateVerticalScale, textScale} from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';

export default function BorderTextInput({
  leftIcon,
  color = colors.textGreyOpcaity7,
  rightIcon,
  onChangeText,
  value,
  placeholder,
  marginBottom = 20,
  onPressRight = () => {},
  withRef = false,
  secureTextEntry = false,
  ...props
}) {
  const inputRef = useRef();

  useEffect(() => {
    if (withRef && Platform.OS === 'android') {
      if (inputRef.current) {
        inputRef.current.setNativeProps({
          style: {fontFamily: fontFamily.regular},
        });
      }
    }
  }, [secureTextEntry]);
  return (
    <View style={styles.container}>
      {leftIcon && (
        <View style={styles.iconImageStyle}>
          <Image source={leftIcon} />
        </View>
      )}
      <TextInput
        selectionColor={colors.white}
        placeholder={placeholder}
        placeholderTextColor={color}
        style={styles.textInputStyle}
        ref={inputRef}
        blurOnSubmit
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        {...props}
      />
      {rightIcon && (
        <TouchableOpacity
          style={styles.touchableViewStyle}
          hitSlop={hitSlopProp}
          onPress={onPressRight}>
          <Image style={{tintColor: colors.white}} source={rightIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: moderateVerticalScale(49),
    color: colors.white,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.borderLight,
    marginBottom,
  },
  textInputStyle: {
    flex: 1,
    opacity: 0.7,
    color,
    fontFamily: fontFamily.medium,
    fontSize: textScale(16),
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  iconImageStyle: {justifyContent: 'center', marginLeft: 10},
  touchableViewStyle: {justifyContent: 'center', marginRight: 10},
});
