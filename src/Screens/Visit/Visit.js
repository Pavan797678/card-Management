import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import ButtonWithImage from '../../Components/ButtonWithImage';
import Header from '../../Components/Header';
import CircularLoader from '../../Components/Loaders/CircularLoader';
import NearByUsersList from '../../Components/NearByUsersList';
import imagePath from '../../constants/imagePath';
import usersList from '../../redux/actions/index';
import colors from '../../styles/colors';
import Geolocation from 'react-native-geolocation-service';
import {locationPermission} from '../../utils/permissions';

export default class Visit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVisible: true,
      searchUser: '',
      isLoading: false,
      usersListNearByMe: [],
    };
  }

  _onChangeText = key => {
    return value => {
      this.setState({
        [key]: value,
      });
      if (this.isTimeOut) {
        clearTimeout(this.isTimeOut);
      }
      this.isTimeOut = setTimeout(() => {
        this.findUsersListApiCall();
      }, 600);
    };
  };

  findUsersListApiCall = () => {
    const {searchUser} = this.state;
    console.log(searchUser);
    this.setState({
      isLoading: true,
    });
    usersList
      .searchUsers(searchUser)
      .then(res => {
        this.setState({
          usersListNearByMe: res.data,
          isLoading: false,
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          usersListNearByMe: [],
        });
      });
  };

  findPeopleNearByMe = () => {
    locationPermission()
      .then(res => {
        Geolocation.getCurrentPosition(
          position => {
            let {longitude, latitude} = position.coords;
            console.log(longitude, latitude);
            this.setState({
              isLoading: true,
            });
            usersList
              .nearByUsers(longitude, latitude)
              .then(res => {
                console.log(res);
                this.setState({
                  usersListNearByMe: res.data,
                  isLoading: false,
                });
              })
              .catch(error => {
                this.setState({
                  isLoading: false,
                });
              });
          },
          error => {
            // See error code charts below.
            console.log(error);
            alert('location error');
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      })
      .catch(error => {});
  };

  render() {
    const {searchVisible, usersListNearByMe, isLoading} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header
          searchVisible={searchVisible}
          _onChangeText={this._onChangeText('searchUser')}
        />
        <ButtonWithImage
          bgColor={colors.themeColor}
          buttonText={'Find Users Near By Me'}
          btnTextColor={colors.white}
          imageSource={imagePath.search_icon}
          onUserPress={this.findPeopleNearByMe}></ButtonWithImage>
        <CircularLoader isLoading={isLoading} />

        <FlatList
          data={usersListNearByMe}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          onEndReached={this.LoadMoreItems}
          ListFooterComponent={this.renderFooter}
          ItemSeparatorComponent={this.spaceView}
          renderItem={({item, index}) => {
            return <NearByUsersList data={item} />;
          }}
        />
      </View>
    );
  }
}
