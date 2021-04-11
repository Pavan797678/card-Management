import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import colors from '../styles/colors';

function BrandedItems(props) {
  const {data, onadd, itemdata} = props;

  return (
    <TouchableWithoutFeedback onLongPress={() => onadd(data.id)}>
      <View style={styles.itemStyle}>
        <Image source={imagePath.flash_sale}></Image>
        <Image style={styles.productImages} source={{uri: data.image}}></Image>
        <Text style={styles.itemText}>{data.name}</Text>
        <View style={styles.priceView}>
          <Text style={styles.ratingText}>₹{data.price}</Text>
          <Image style={styles.lockImageStyle} source={imagePath.lock}></Image>
        </View>
        <View style={styles.cartViewOuterStyle}>
          {itemdata.includes(data) ? (
            <View style={styles.alreadyAddedToCartView}>
              <Text style={{color: colors.white, marginHorizontal: 5}}>
                {strings.ALREADY_ADDED_TO_CART}
              </Text>
            </View>
          ) : (
            <View style={styles.addPost}>
              <TouchableOpacity onPress={() => onadd(data)}>
                <Text style={{color: colors.white}}>{strings.ADD_TO_CART}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    marginVertical: 10,
    backgroundColor: 'white',

    height: 280,
    width: 170,
    flex: 1,
    margin: 0.2,
    borderColor: 'gray', // if you need
    borderWidth: 0.5,
    overflow: 'hidden',
    shadowColor: 'black',
    marginHorizontal: 10,
    shadowRadius: 0.1,
    shadowOpacity: 0.5,
    borderRadius: 10,
  },
  itemText: {
    color: colors.black,
    marginHorizontal: 10,
    fontSize: 15,
  },
  productImages: {
    height: 140,
    width: 170,
    resizeMode: 'contain',
  },
  priceView: {
    backgroundColor: colors.lightSky,
    marginBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },

  ratingText: {
    fontSize: 16,
    height: 25,
    marginHorizontal: 10,
    color: colors.orange,
  },
  addPost: {
    backgroundColor: colors.themeColor,

    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
  },
  lockImageStyle: {height: 20, width: 20},
  cartViewOuterStyle: {justifyContent: 'center', alignItems: 'center'},
  alreadyAddedToCartView: {
    backgroundColor: colors.textBlue,
    height: 40,
    justifyContent: 'center',
  },
});

const mapStateToProps = function (state) {
  return {
    itemdata: state.carts.todo,
  };
};

export default connect(mapStateToProps)(BrandedItems);
