import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'

export default function ButtonWithImage(props) {
    const {bgColor,buttonText,imageSource,isImageVisiable,btnTextColor ,onUserPress}=props
    return (
       
           <TouchableOpacity style={{
            height:moderateScaleVertical(50),
            justifyContent:'center',
            alignItems:'center',
           backgroundColor:bgColor
        
        }} onPress={onUserPress}>
            
              {isImageVisiable  && <Image source={imageSource}
                 style={styles.imageStyle}
              />}
              <Text style={{color:btnTextColor,textTransform: 'uppercase',}}>{buttonText}</Text>    
          
           </TouchableOpacity>
     
    )
}
const styles = StyleSheet.create({
  
imageStyle:{
    position:'absolute',
    left:10,
    height:moderateScaleVertical(25),
    width:moderateScale(25)
}
})