import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ChatsList from '../../Components/ChatsList';
import Header from '../../Components/Header';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions/index';
import colors from '../../styles/colors';

export default class ConversectionUsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVisible: true,
      searchUser: '',
      isLoading: false,
      chatUsersList: [],
    };
  }

  componentDidMount() {
    this.ChatUsersList();
  }

  ChatUsersList = () => {
    this.setState({
      isLoading: true,
    });
    actions
      .chatUsersList(10, 0)
      .then(res => {
        this.setState({
          chatUsersList: res.data,
          isLoading: false,
        });
        console.log(res.data);
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });
      });
  };

  goToChatScreen = data => {
    const {navigation} = this.props;


    navigation.navigate(navigationStrings.CHAT_SCREEN, {
      id: data._id,
      commonConversationId: data.commonConversationId,
      profileImg: data.userInfo.profileImg[0].original,
      userName:data.userInfo.fullName,
      isOnline:data.userInfo.isOnline
    });
  };

  render() {
    const {searchVisible, chatUsersList, isLoading} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header searchVisible={searchVisible} isLoading={isLoading} />

        <FlatList
          data={chatUsersList}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                marginLeft: 95,
                height: 0.5,
                backgroundColor: colors.textGreyB,
              }}></View>
          )}
          renderItem={({item, index}) => {
            return (
              <ChatsList data={item} goToChatScreen={this.goToChatScreen} />
            );
          }}
        />
      </View>
    );
  }
}
