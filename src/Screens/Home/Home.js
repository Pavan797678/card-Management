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
} from 'react-native';


import Counter from './../../Components/Counter';
import {add} from '../../redux/actions/actions';


import ModalView from '../../Components/ModalView';
import Header from '../../Components/Header';
import store from '../../redux/store';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      isLoading: true,
      data: '',
      page: 1,
      item_id: null,

      title: '',
      description: '',
      id: 0,
      isModalVisibal: false,
      titleplaceholder: 'Title',
      descriptionPlaceholder: 'Description',
      isAdd: false,
      brandedItems: [
        {
          id: 0,
          name: 'Execution',
          rating: '5.0*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/81gnvKXmLsL._UL1500_.jpg',
        },
        {
          id: 1,
          name: 'Womens design',

          rating: '3.0*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/81jITMrPr0L._UL1500_.jpg',
        },
        {
          id: 2,
          name: 'Womens Clothing',

          rating: '4.5*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61GORvjTJxL._UL1440_.jpg',
        },
        {
          id: 3,
          name: 'Brand Collection',

          rating: '3.9*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71vtGhTq7rL._UL1500_.jpg',
        },
        {
          id: 4,
          name: 'New Collection',

          rating: '4.6*',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61QQ3N%2Bvx-L._UL1440_.jpg',
        },
        {
          id: 5,
          name: 'Clothes',

          rating: '2.3*',
          image:
            'https://sac.flipkart.net/wp-content/uploads/2017/03/Signature.png',
        },
        {
          id: 6,
          name: 'designs',

          rating: '1.2*',
          image:
            'https://sac.flipkart.net/wp-content/uploads/2017/03/Signature.png',
        },
        {
          id: 7,
          name: 'Offer',

          rating: '2.1*',
          image:
            'https://sac.flipkart.net/wp-content/uploads/2017/03/Signature.png',
        },
        {
          id: 8,
          name: 'new Offering',

          rating: '2.5*',
          image:
            'https://sac.flipkart.net/wp-content/uploads/2017/03/Signature.png',
        },
        {
          id: 9,
          name: 'new Designs',

          rating: '3.4*',
          image:
            'https://sac.flipkart.net/wp-content/uploads/2017/03/Signature.png',
        },
      ],
    };
    console.disableYellowBox = true;
  }
  s = store.subscribe(() => this.setState({}));
 
  _onChangeText = key => {
    return value => {
      this.setState({
        [key]: value,
      });
      console.log(this.state.title);
    };
  };

  openModal = () => {
    const {isModalVisibal} = this.state;
    this.setState({
      isModalVisibal: true,
      isAdd: true,
    });
  };
  openModalForUpdate = id => {
    const {isModalVisibal} = this.state;
    this.setState({
      isModalVisibal: true,
      isAdd: false,
      item_id: id,
    });
  };

  onCloseModal = () => {
    this.setState({isModalVisibal: false});
  };

  add = (id) => {
    const { isModalVisibal, description,brandedItems} = this.state;
    let newPostArry = [...brandedItems];
    var obj = {};
    
       var obj = {};
       obj['id'] = newPostArry[id].id;
       obj['name'] = newPostArry[id].name;
      
       obj['image'] = newPostArry[id].image;
  
     store.dispatch(add(obj));
     console.log(store.getState().todo);
  
     this.setState({
      cartCount: store.getState().todo.length,
      
    });
    alert(this.state.cartCount)
  };
  
  onDelete = id => {
    Alert.alert(
      'Alert Message',
      'are you sure you want to delete this post',
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

  onUpdate = () => {
    const {item_id, title, description} = this.state;
    console.log(item_id);
    // this.openModal()
    store.dispatch(onupdate(item_id, title, description));
    this.setState({
      isModalVisibal: false,
    });
  };

  render() {
    const {isModalVisibal, title, descriptionPlaceholder, isAdd,brandedItems,cartCount} = this.state;
    console.log(store.getState().todo)

    return (
      <View style={{flex: 1}}>
        <Header cartCount={cartCount} />

        <FlatList
          data={brandedItems}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <Counter
                data={item} 
                onadd={this.add}
              />
            );
          }}
        />
        <View style={{position: 'absolute', bottom: 0, right: 0}}>
         
        </View>
        {isAdd ? (
          <ModalView
            _onChangeText={this._onChangeText}
            title={title}
            onCloseModal={this.onCloseModal}
            isModalVisibal={isModalVisibal}
            add={this.add}
            titleplaceholder={this.state.titleplaceholder}
            descriptionPlaceholder={descriptionPlaceholder}
            ButtonText={'Add Post'}
          />
        ) : (
          <ModalView
            _onChangeText={this._onChangeText}
            title={title}
            onCloseModal={this.onCloseModal}
            isModalVisibal={isModalVisibal}
            add={this.onUpdate}
            titleplaceholder={this.state.titleplaceholder}
            descriptionPlaceholder={descriptionPlaceholder}
            ButtonText={'Update'}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emailField: {
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 30,
    borderRadius: 5,
    borderWidth: 0.5,
  },
});
