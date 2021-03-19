import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../styles/colors';

function Counter({data, onadd}) {
 

  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <View style={{flex:0.4}}>
        <Image style={{height:200,width:200 ,resizeMode:'contain'}} source={{uri:data.image}}></Image>
        </View >
        <View style={{flex:0.6,marginHorizontal:70,backgroundColor:colors.themeColor}}>
        <Text style={{fontSize: 18 ,color:colors.white}}> {data.name}</Text>
       
        </View>
      </View>
      
      <View
        style={{
          flexDirection: 'row',
         
         
          marginVertical: 5,
        }}>
          <View style={{width:"100%",alignItems:'center'}}>
        <View style={styles.addPost}>
          <TouchableOpacity onPress={() => onadd(data.id)}>
            <Text style={{color: colors.whiteText}}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
        </View>
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: 'gray', // if you need
    borderWidth: 0.5,
    overflow: 'hidden',
    shadowColor: 'black',
    marginHorizontal: 10,
    shadowRadius: 0.1,
    shadowOpacity: 0.5,
    borderRadius: 10,
    
  },
  headingView: {
    flexDirection: 'row',
    flex:1,
    width:"100%",
    
    
    
  },
  bodyView: {
    marginHorizontal: 20,
  },
  addPost: {
    backgroundColor: colors.themeColor,

    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
  },
});

export default Counter;
