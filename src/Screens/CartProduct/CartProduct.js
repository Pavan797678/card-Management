import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import CartItem from '../../Components/CartItem';

import store from '../../redux/store';
import {ondelete} from '../../redux/actions/actions';
import DetailHeader from '../../Components/CustomHeader';
import {connect} from 'react-redux';

class CartProduct extends Component {
  state = {
    cartArray: [],
    isVisible: true,
  };

  ListEmptyView = () => {
    return (
      <View style={styles.MainContainer}>
        <Image
          style={styles.cartEmptyImage}
          source={{
            uri:
              'https://lh3.googleusercontent.com/proxy/tqRl5H91M5wDqvDFZu0f8TIwHM6A4418IqNz3WG9ngUs68bV66b3gbdhlTCmWjYo6QTsAU3eRvvjzWiXzc0',
          }}></Image>
      </View>
    );
  };

  productQuantityIncreament = id => {
    let newQuantityArray = [...this.props.data];

    const quantityArrayIndex = newQuantityArray.findIndex(
      item => item.id === id,
    );
    let finalQuantityArray = newQuantityArray[quantityArrayIndex];

    finalQuantityArray.quantity += 1;

    console.log(finalQuantityArray.quantity);

    let total = 0;

    for (let i = 0; i < newQuantityArray.length; i++) {
      total += newQuantityArray[i].price * newQuantityArray[i].quantity;
    }
    console.log(total);

    this.setState({
      data: finalQuantityArray,
      total,
    });

    // console.log(data);
  };

  productQuantityDecreament = id => {
    let newQuantityArray = [...this.props.data];

    const quantityArrayIndex = newQuantityArray.findIndex(
      item => item.id === id,
    );
    let finalQuantityArray = newQuantityArray[quantityArrayIndex];

    if (finalQuantityArray.quantity == 1) {
      // alert('at least one item will in cart');
      finalQuantityArray.price =
        finalQuantityArray.price / finalQuantityArray.quantity;
    } else {
      finalQuantityArray.quantity -= 1;
    }

    let total = 0;
    let tot;
    for (let i = 0; i < newQuantityArray.length; i++) {
      total += newQuantityArray[i].price * newQuantityArray[i].quantity;
    }
    console.log(total);

    this.setState({
      data: finalQuantityArray,
      total,
    });

    //    console.log(data);
  };

  onDelete = id => {
    Alert.alert(
      'Alert Message',
      'are you sure you want to delete this product',
      [
        {
          text: 'Cancel',
          onPress: () => console.log(id),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            store.dispatch(ondelete(id));
          },
        },
      ],
      {cancelable: false},
    );
  };
  render() {
    const {newQuantity, total} = this.state;
    console.log(this.props, 'cart reducer data');

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <DetailHeader />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={store.getState().todo}
          ListEmptyComponent={this.ListEmptyView}
          renderItem={({item, index}) => (
            <CartItem
              key={index}
              data={item}
              onDelete={this.onDelete}
              newQuantity={newQuantity}
              productQuantityDecreament={this.productQuantityDecreament}
              productQuantityIncreament={this.productQuantityIncreament}
            />
          )}
        />
        <TouchableOpacity onPress={this.checkOutScreen}>
          {this.state.isVisible ? (
            <View style={styles.buyNowButtonView}>
              <Text style={{color: 'white'}}>Place Order:-{total}</Text>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: '50%',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  buyNowButtonView: {
    backgroundColor: '#f74300',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartEmptyImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
});
const mapStateToProps = function (state) {
  return {
    data: state.todo,
  };
};

export default connect(mapStateToProps)(CartProduct);
