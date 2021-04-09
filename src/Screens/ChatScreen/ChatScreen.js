import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {connect} from 'react-redux';
import {SOCKET_STRINGS} from '../../constants/constants';
import socketServices from '../../utils/socketServices';
import actions from '../../redux/actions/index';
import ChatHeader from '../../Components/ChatHeader';
import colors from '../../styles/colors';

class ChatScreen extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.getChatListing();
    socketServices.on(SOCKET_STRINGS.RECEIVED_MESSAGE, this.onReceiveMessage);
  }

  onSend(messages = []) {
    // alert(JSON.stringify(socketServices.emit));

    if (String(messages[0].text).trim().length < 1) {
      return;
    }
    const {id, commonConversationId} = this.props.route.params;
    const {userData} = this.props;

    socketServices.emit(SOCKET_STRINGS.SEND_MESSAGE, {
      senderId: userData._id,
      recieverId: id,
      commonConversationId,
      messageType: 'Text',
      text: messages[0].text,
    });
    console.log(messages);
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  componentWillUnmount() {
    socketServices.removeListener(SOCKET_STRINGS.ACKNOWLEDGED_SENT_BY_RECEIVER);
    socketServices.removeListener(SOCKET_STRINGS.RECEIVED_MESSAGE);
  }

  getChatListing = () => {
    const {commonConversationId, id} = this.props.route.params;

    actions
      .getUserMessgeOneToOne(
        `?commonConversationId=${commonConversationId}&limit=100`,
      )
      .then(res => {
        const {profileImg} = this.props.route.params;

        //To send back response that all the messages have been seen;
        // socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
        //   senderId: id,
        //   isRead: true,
        //   recieverId: (this.props.userData && this.props.userData._id) || '',
        // });
        //Initalizing the chat history

        const messages = res.data.map((data, index) => {
          let message = {
            _id: data._id,
            text: data.text,
            createdAt: data.createdAt,
            user: {
              _id: data.senderId?._id,
              name: data.senderId.firstName,
              avatar: profileImg && profileImg[0].thumbnail,
            },
          };
          if (!!data.repliedToText) {
            message.replyText = data.repliedToText;
          }
          return message;
        });
        this.setState({isLoading: false, messages});
      })
      .catch(error => {
        console.log(error);
      });
  };

  onReceiveMessage = data => {
    console.log(data,"=============data=============");
    const {
      commonConversationId,
      firstName,
      profileImg,
    } = this.props.route.params;
    const message = {
      _id: data._id,
      text: data.text,
      createdAt: data.createdAt,
      user: {
        _id: data.senderId,
        name: firstName,
        avatar: profileImg && profileImg[0].thumbnail,
      },
    };
    // console.log(data,"----------data")
    // console.log(commonConversationId,'the commonejoijoj');
    //To make sure that all the messages are seen if new message comes

    if (data.commonConversationId === commonConversationId) {
      socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
        senderId: data.senderId,
        isRead: true,
        recieverId: data.recieverId,
      });

      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }));
    }
  };

  render() {
    const {messages} = this.state;
    const {userData} = this.props;
    const {profileImg, userName, isOnline} = this.props.route.params;

    console.log(messages);
    return (
      <>
        <ChatHeader
          userImage={profileImg}
          headingText={userName}
          onlineStatus={isOnline}
        />
        <GiftedChat
          messages={messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: userData._id,
          }}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.authreducer.userData,
  };
};

export default connect(mapStateToProps)(ChatScreen);
