import React from 'react';
import {View,Text,Image,StyleSheet, Dimensions} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';


const {height,width} = Dimensions.get("screen");

function ProfileItem({}) {

    return(
        <View style={styles.paymentDetailsView}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 60, width: 60, marginHorizontal: 20}}
            source={imagePath.profile}
          />
          <View style={{flexDirection:'row'}}>
            <Text style={styles.priceDetails}>My Orders</Text>
            
          </View>
        </View>
        <View style={styles.lineView}></View>
        <View >
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 60, width: 60, marginHorizontal: 20}}
            source={imagePath.profile}
          />
          <View style={{flexDirection:'row'}}>
            <Text style={styles.priceDetails}>My Appointments</Text>
           
          </View>
        </View>
        <View style={styles.lineView}></View>
        
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 60, width: 60, marginHorizontal: 20}}
            source={imagePath.profile}
          />
          <View>
            <Text style={styles.priceDetails}>Reminders</Text>
            <Text style={{}}></Text>
          </View>
        </View>
         
         
        </View>
      </View>
    )
    
}
const styles = StyleSheet.create({
    paymentDetailsView: {
      height: '30%',
      marginHorizontal: 20,
      backgroundColor: 'white',
     
  
      borderRadius: 10,
      elevation: 5,
    },
    priceDetails: {
      color: 'grey',
      fontSize: 22,
      marginTop: 15,
    },
    lineView: {
      height: 0.5,
      backgroundColor: 'lightgrey',
      marginVertical: 5,
    },
    lineView1: {
      height: 120,
      width: 0.5,
      backgroundColor: 'lightgrey',
      marginVertical: 5,
    },
    title: {
      fontSize: 15,
      marginHorizontal: 15,
      marginVertical: 10,
    },
    price: {
      fontSize: 15,
      marginHorizontal: 15,
  
      color: colors.themeColor,
    },
    totalPrice: {
      fontSize: 15,
      marginHorizontal: 15,
      marginVertical: 15,
    },
    deliverycharge: {
      color: 'green',
      fontSize: 15,
      marginHorizontal: 15,
      marginVertical: 10,
    },
  });

export default ProfileItem;