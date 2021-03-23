import React from 'react';
import {Text, View, StyleSheet, Image,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';

import colors from '../styles/colors';


function TopCategory({data}) {
  
  return (
   
    <TouchableWithoutFeedback >
    <View style = {styles.itemStyle} >
    
        <Image style={styles.productImages} source={{uri:data.productImage}}></Image>
       
      
    </View>
    </TouchableWithoutFeedback>
   
  );
}


const styles = StyleSheet.create({
 
  itemStyle:{
     
   
   
    
    width:170,
   
    
    
    marginHorizontal:10,
   
    
  },
 productImages:{
      height:120,
      width:170,
      resizeMode:'contain',
  },priceView:{
    backgroundColor:colors.lightSky,  
    marginBottom:5,
   justifyContent:'space-between',
   alignItems:'center',
   paddingHorizontal:5,
    flexDirection:'row'

  },
  
  ratingText:{
    fontSize:16,
    height:25,
    marginHorizontal:10,
    color:colors.orange,
   
   
    
  },addPost: {
    backgroundColor: colors.themeColor,

    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
  },
  
});

export default TopCategory;
