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
import {
  ondelete,
  onItemAdd,
  onInitialPrice,
  onItemDelete,
} from '../../redux/actions/actions';
import DetailHeader from '../../Components/CustomHeader';
import {connect} from 'react-redux';

class CartProduct extends Component {
  state = {
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

  componentDidMount() {
    store.dispatch(onInitialPrice(this.props.data));
  }

  productQuantityIncreament = id => {
    store.dispatch(onItemAdd(id));
  };

  productQuantityDecreament = id => {
    store.dispatch(onItemDelete(id));
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
    const {newQuantity} = this.state;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <DetailHeader />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.data}
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
              <Text style={{color: 'white'}}>
                Place Order:{this.props.price}
              </Text>
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
const mapStateToProps =state=> {
 
  return{
    data:state.carts.todo,
    price: state.carts.total,
 
  }
   
   
};

export default connect(mapStateToProps)(CartProduct);
