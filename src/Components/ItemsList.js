import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Button} from 'react-native';

const {height, width} = Dimensions.get('screen');

export default function ItemList({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.cartItemView}>
        <View>
          <Image
            style={styles.userImage}
            source={{uri: data.airline.logo}}></Image>
          <View
            style={styles.companyDetails}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.heading}>Company- </Text>
              <Text>{data.airline.name}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.heading}>Country- </Text>
              <Text>{data.airline.country}</Text>
            </View>
          </View>
          <View
            style={styles.websiteDetail}>
            <Text style={styles.heading}>WebSite- </Text>
            <Text>{data.airline.website}</Text>
          </View>
          <View style={{marginHorizontal:20}}>
          <Text style={styles.heading}>Headquaters- </Text>
              <Text style={{}}>{data.airline.head_quaters}</Text>
          </View>
          <View style={styles.buttonView}>
           <View style={{backgroundColor:'green',alignItems:'center',justifyContent:'center',width:'30%'}}>
               <Text style={styles.buttonContentText}>Details</Text>
           </View>
           <View style={{backgroundColor:'green',alignItems:'center',justifyContent:'center',width:'30%'}}>
               <Text style={styles.buttonContentText}>Book Now</Text>
           </View>
           
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  cartItemView: {
    height: height / 3,
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  userImage: {
    width: '50%',
    height: '30%',
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  heading: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },companyDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical:10
  },
  websiteDetail:{
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical:10
  },buttonView:{
      marginTop:10,
      height:'18%',
      flexDirection:'row',
      justifyContent:'space-between',
      bottom:0,
      marginHorizontal:20
  },buttonContentText:{
      color:'white'
  }
});
