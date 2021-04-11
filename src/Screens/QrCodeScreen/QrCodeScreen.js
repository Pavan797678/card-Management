import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Linking, StyleSheet,Modal} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import colors from '../../styles/colors';
import QRCode from 'react-native-qrcode-svg';
import CustomQrMarker from '../../Components/CustomQrMarker';


export default class QrCodeScreen extends Component {
       state={
        isModalVisiable:false
       }
closeModal=()=>{
    this.setState({
        isModalVisiable:false
    })
}
openModal=()=>{
    this.setState({
        isModalVisiable:true
    })
}
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
        Linking.addListener(alert(e.data))
      };
  render() {
    return (
        <>
        <QRCodeScanner
        reactivate={true}
        showMarker={true}
        markerStyle={styles.markerStyles}
        ref={(node) => { this.scanner = node }}
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>QRCodeScanner</Text> 
           
          </Text>
        }
        
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={this.openModal}>
            <Text style={styles.buttonText}>Show HealthKart Code</Text> 
          </TouchableOpacity>
        }
      />
      <Modal 
      visible={this.state.isModalVisiable}
      onRequestClose={this.closeModal}
      >
      <View style={styles.qrcodeLinkView}>
      <QRCode
      value="http://awesome.link.qr"
    />
      </View>
      </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: colors.blackOpacity10,
  },
  textBold: {
    
    color:colors.black ,
  },
  buttonText: {
    fontSize:21,
    color:colors.black,
  },
  buttonTouchable: {
    padding: 16,
  },markerStyle:{
     borderColor:colors.themeColor, borderRadius: 20 
  },qrcodeLinkView:{
    flex:1, alignItems:'center',justifyContent:'center'
  }
});
