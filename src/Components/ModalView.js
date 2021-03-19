import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from 'react-native';
import colors from '../styles/colors';

function ModalView({
  _onChangeText,
  onCloseModal,
  isModalVisibal,
  add,
  title,
  description,
  titleplaceholder,
  descriptionPlaceholder,
  ButtonText,
}) {
  return (
    <View>
      <Modal transparent onRequestClose={onCloseModal} visible={isModalVisibal}>
        <View style={styles.modalView}>
          <View style={styles._modalView}>
            <TouchableOpacity onPress={() => onCloseModal()}>
              <Text style={{fontSize: 20}}>Close</Text>
            </TouchableOpacity>
            <TextInput
              placeholder={titleplaceholder}
              onChangeText={_onChangeText('title')}
              style={styles.inputTextStyle}
            />
            <TextInput
              placeholder={descriptionPlaceholder}
              value={description}
              onChangeText={_onChangeText('description')}
              style={styles.inputTextStyle}
            />

            <TouchableOpacity onPress={() => add()}>
              <View style={styles.addPost}>
                <Text style={{color: colors.whiteText}}>{ButtonText}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  _modalView: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderBottomEndRadius: 20,
  },
  inputTextStyle: {
    width: '90%',
    borderColor: 'lightblue',
    borderWidth: 1,
    marginTop: 10,
  },
  addPost: {
    backgroundColor: colors.themeColor,
    marginTop: 20,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default ModalView;
