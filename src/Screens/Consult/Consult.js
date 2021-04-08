import React, {Component} from 'react';
import {
  View,
  FlatList,
  RefreshControl,
} from 'react-native';
import Header from '../../Components/Header';
import ItemList from '../../Components/ItemList';
import CircularLoader from '../../Components/Loaders/CircularLoader';
import usersList from '../../redux/actions/index';

const page = 2;
export default class Consult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skip: 0,
      isLoading: true,
      isListEnd: false,
      isFetching: false,
      data: [],

      refreshing: false,
    };
    console.disableYellowBox = true;
  }
  componentDidMount() {
    this.makeRequest();
  }
  makeRequest = (onEndReachCall = false) => {
    const {skip, data, isListEnd} = this.state;

    let calcSkip = onEndReachCall ? skip + data.length : 0;

    usersList
      .loadUserData({
        searchType: 'LEADERBOARD',
        limit: page,
        skip: calcSkip.toString(),
      })
      .then(res => {
        if (res.data.length > 0) {
          let item = [...this.state.data, ...res.data];
          this.setState({
            data: item,
            isLoading: false,
          });
        } else {
          this.setState({
            isListEnd: true,
            isLoading: false,
          });
        }
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });
      });
  };

  spaceView = () => {
    return <View style={{height: 25}}></View>;
  };
  LoadMoreItems = () => {
    const {isLoading, isListEnd} = this.state;
    if (isLoading || isListEnd) {
      return;
    } else {
      this.setState({
        isLoading: true,
      });
      this.makeRequest(true);
    }
  };

  renderFooter = () => {
    const {isLoading} = this.state;
    return <CircularLoader isLoading={isLoading} />;
  };

  _onRefresh = () => {
    this.setState({isFetching: true, isListEnd: false});
    usersList
      .loadUserData({
        searchType: 'LEADERBOARD',
        limit: `2`,
        skip: '0',
      })
      .then(res => {
        this.setState({isFetching: false, data: res.data});
        console.log(res.data)
      })
      .catch(err => {
        this.setState({isFetching: false});
      });
  };

  render() {
    const {data, refreshing} = this.state;

    return (
      <View style={{flex: 1}}>
        <Header />

        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._onRefresh}
            />
          }
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          onEndReached={this.LoadMoreItems}
          ListFooterComponent={this.renderFooter}
          ItemSeparatorComponent={this.spaceView}
          renderItem={({item, index}) => {
            return <ItemList data={item} />;
          }}
        />
      </View>
    );
  }
}
