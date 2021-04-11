import axios from 'axios';
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import {add} from '../../redux/actions/actions';

import Header from '../../Components/Header';
import store from '../../redux/store';
import {connect} from 'react-redux';
import Carousel from '../../Components/Carousel';
import BrandedItems from '../../Components/BrandedItems';
import colors from '../../styles/colors';
import TopCategory from '../../Components/TopCategory';
import socketServices from '../../utils/socketServices';
import actions from '../../redux/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: '',
      page: 1,
      item_id: null,
      searchVisible: true,

      isModalVisibal: false,
      titleplaceholder: 'Title',
      descriptionPlaceholder: 'Description',
      isAdd: false,
      brandedItems: [
        {
          id: 0,
          name: 'Execution',
          price: 100,
          quantity: 0,
          rating: '5.0*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61k44w0LTHL._AC_SL1000_.jpg',
        },
        {
          id: 1,
          name: 'Womens design',
          price: 100,
          quantity: 0,
          rating: '3.0*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/612WXGsMUfL._AC_SL1000_.jpg',
        },
        {
          id: 2,
          name: 'Womens Clothing',
          price: 100,
          quantity: 0,
          rating: '4.5*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/81h7Omha5cL._AC_SL1500_.jpg',
        },
        {
          id: 3,
          name: 'Brand Collection',
          price: 100,
          quantity: 0,
          rating: '3.9*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61RRqvqsnhL._AC_SL1360_.jpg',
        },
        {
          id: 4,
          name: 'New Collection',
          price: 100,
          quantity: 0,
          rating: '4.6*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/81ALUO15ntL._AC_SL1500_.jpg',
        },
        {
          id: 5,
          name: 'Clothes',
          price: 100,
          quantity: 0,
          rating: '2.3*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61DgIVMTTaL._AC_SL1500_.jpg',
        },
        {
          id: 6,
          name: 'designs',
          price: 100,
          quantity: 0,
          rating: '1.2*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71W1miALQrL._AC_SL1500_.jpg',
        },
        {
          id: 7,
          name: 'Offer',
          price: 100,
          quantity: 0,
          rating: '2.1*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/81uGRdSMjOL._AC_SL1500_.jpg',
        },
        {
          id: 8,
          name: 'new Offering',
          price: 100,
          quantity: 0,
          rating: '2.5*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/51YZPsXGkpL._AC_SL1037_.jpg',
        },
        {
          id: 9,
          name: 'new Designs',
          price: 100,
          quantity: 0,
          rating: '3.4*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/81aw8CQDRrL._AC_SL1500_.jpg',
        },
      ],

      topCategories: [
        {
          id: 1,
          productImage: 'https://img2.hkrtcdn.com/13437/normal_1343641_o.png',
        },
        {
          id: 2,
          productImage: 'https://img8.hkrtcdn.com/13471/normal_1347067_o.png',
        },
        {
          id: 3,
          productImage: 'https://img10.hkrtcdn.com/13471/normal_1347079_o.png',
        },
        {
          id: 4,
          productImage: 'https://img4.hkrtcdn.com/13471/normal_1347073_o.png',
        },
        {
          id: 5,
          productImage: 'https://img2.hkrtcdn.com/13471/normal_1347071_o.png',
        },
        {
          id: 6,
          productImage: 'https://img6.hkrtcdn.com/13471/normal_1347075_o.png',
        },
      ],
    };
    console.disableYellowBox = true;
  }

  componentDidMount() {
    socketServices.initializeSocket(this?.props?.userData?.accessToken);
  }
  _onChangeText = key => {
    return value => {
      this.setState({
        [key]: value,
      });
      console.log(this.state.title);
    };
  };

  add = itemdata => {
    actions.add(itemdata);
  };

  render() {
    const {brandedItems, topCategories, searchVisible} = this.state;

    return (
      <View style={{flex: 1}}>
        <Header searchVisible={searchVisible} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainContainer2}>
          <View>
            <Carousel />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontSize: 18, marginHorizontal: 20, marginVertical: 5}}>
              Flash Sale
            </Text>
            <View
              style={{
                marginHorizontal: 20,
                marginVertical: 5,
                backgroundColor: colors.white,
                elevation: 4,
                borderRadius: 5,
              }}>
              <Text style={{fontSize: 16, margin: 5}}>View all</Text>
            </View>
          </View>
          <View style={styles.brandedItems}>
            <View style={styles.container1}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={brandedItems}
                horizontal
                keyExtractor={item => item.name.toString()}
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      height: 0.3,
                      backgroundColor: colors.textGrey,
                    }}></View>
                )}
                renderItem={({item, index}) => (
                  <BrandedItems data={item} index={index} onadd={this.add} />
                )}
              />
            </View>
          </View>
          <View style={styles.mainContainer3}>
            <View style={styles.container}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 18,
                    marginHorizontal: 20,
                    marginVertical: 5,
                  }}>
                  Trending Now
                </Text>
                <View
                  style={{
                    marginHorizontal: 20,
                    marginVertical: 5,
                    backgroundColor: colors.white,
                    elevation: 4,
                    borderRadius: 5,
                  }}>
                  <Text style={{fontSize: 16, margin: 5}}>View all</Text>
                </View>
              </View>
              <View style={styles.container1}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={brandedItems}
                  horizontal
                  keyExtractor={item => item.name.toString()}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        height: 0.3,
                        backgroundColor: colors.textGrey,
                      }}></View>
                  )}
                  renderItem={({item}) => (
                    <BrandedItems data={item} onadd={this.add} />
                  )}
                />
              </View>
            </View>
          </View>
          <View style={styles.mainContainer3}>
            <View style={styles.container}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 18,
                    marginHorizontal: 20,
                    marginVertical: 5,
                  }}>
                  Top Category
                </Text>
              </View>
              <View style={styles.container1}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={topCategories}
                  numColumns={2}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => <TopCategory data={item} />}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emailField: {
    backgroundColor: colors.white,
    height: 50,
    marginHorizontal: 30,
    borderRadius: 5,
    borderWidth: 0.5,
  },
});
const mapStateToProps = function (state) {
  return {
    userData: state?.authreducer?.userData,
  };
};

export default connect(mapStateToProps)(Home);
