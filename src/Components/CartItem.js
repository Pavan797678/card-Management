import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';


export default function CartItem({
  data,
  onDelete,
  productQuantityIncreament,
  newQuantity,
  productQuantityDecreament,
  

})


{
  let finalPrice = data.price*data.quantity;

  

  return (
    <View style={styles.parentView}>
      <View style={styles.mainView}>
        <View style={styles.productDetails}>
          <Text style={styles.productText}>{data.name}</Text>
          <Text style={styles.priceText}>Price:-{data.price}</Text>
          <Text style={styles.sizeText}>Size:Free</Text>
          <Text style={styles.sellerText}>Seller:7 Drims</Text>
          <View style={styles.priceView}>
           
          </View>
          <Text style={styles.remaningProduct}>{data.rating}</Text>
          <Text style={styles.deliveryTime}>.Delivery by Mon Mar8</Text>
        </View>
        <View style={styles.productImage}>
          <Image style={styles.productImages} source={{uri:data.image}}></Image>
          <View style={styles.productQuantity}>
            <TouchableOpacity
              onPress={() => productQuantityDecreament(data.id)}>
              <Text style={{marginHorizontal: 10, fontSize: 15}}>-</Text>
            </TouchableOpacity>
            <View style={{borderRightWidth: 0.3}}></View>

            <Text style={{marginHorizontal: 10}}>{data.quantity}</Text>

            <View style={{borderRightWidth: 0.3}}></View>
            <TouchableOpacity
              onPress={() => productQuantityIncreament(data.id)}>
              <Text style={{marginHorizontal: 10}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.cartproductOperation}>
        <Text style={{marginHorizontal: 10}}>Save for later</Text>
        <View style={{borderRightWidth: 0.3}}></View>
        <TouchableOpacity onPress={()=>onDelete(data.id)}>
        <Text style={{marginHorizontal: 10}}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    justifyContent: 'space-between',
    height: 200,
    marginTop: 20,
  },
  productImage: {
    flex: 0.3,
  },
  productDetails: {
    flex: 0.4,
    marginHorizontal: 20,
  },
  productImages: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  remaningProduct: {
    color: 'red',
  },
  offerText: {
    color: 'green',
    marginVertical: 35,
    marginHorizontal: 2,
  },
  productText: {
    fontSize: 20,
  },
  sizeText: {
    color: 'grey',
  },
  sellerText: {
    color: 'grey',
  },
  priceText: {
    fontSize: 20,
    marginVertical: 30,
  },
  priceView: {
    flexDirection: 'row',
  },
  offpriceText: {
    color: 'grey',
    textDecorationLine: 'line-through',
    marginVertical: 35,
    marginHorizontal: 10,
  },
  cartproductOperation: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 10,
    borderBottomWidth: 7,
    borderColor: 'lightgrey',
  },
  productQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginTop: 5,
    padding: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});
