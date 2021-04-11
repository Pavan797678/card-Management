import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';

const {width,height} = Dimensions.get('screen')

export default StyleSheet.create ({

    containerView:{
        flex:1,
        backgroundColor:colors.themeColor,
       
      
    },buttonContainer:{
      alignItems:'center',
      marginVertical:40
    }, title: {
      color: colors.white,
      fontSize: 30,
      textAlign: 'center',
      marginTop: '20%',
    }, image: {
      flex: 1,
      resizeMode: "contain",
      
    },ButtonView:{
      width:"40%",
      alignItems:'center',
      marginTop:height/1.5, 
    },itemImageStyle:{
      marginTop: '50%',
      height: 250,
      width: '100%',
      resizeMode: 'contain',
    },crouselViewStyles:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },buttonOuterView:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    }
    

})