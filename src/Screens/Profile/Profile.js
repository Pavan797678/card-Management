
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
import {connect} from 'react-redux';
import Header from '../../Components/Header';
import ProfileItem from '../../Components/ProfileItem';

import imagePath from '../../constants/imagePath';
import { onLogout } from '../../redux/actions/auth';
import store from '../../redux/store';
import colors from '../../styles/colors';
import { clearUserData } from '../../utils/utils';

class Profile extends Component {


  onLogout =()=>{
    clearUserData()
    store.dispatch(onLogout())

  }


  render() {
    const {userData={}} = this.props;
    console.log(userData);
    return (
      <View style={{flex: 1}}>
        <Header />
        <View style={{flex: 1}}>
          <View style={styles.paymentDetailsView}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 60, width: 60, marginHorizontal: 20}}
                source={imagePath.profile}
              />
              <View>
                <Text style={styles.priceDetails}>Pavan Sharma</Text>
                {/* {userData===''?<></>: <Text>{userData.contactDetails.phoneNo}</Text>} */}
               
              </View>
              <View style={{width: '38%', justifyContent: 'center'}}>
                <TouchableOpacity onPress={this.onLogout}>
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 20,
                    marginHorizontal: 5,
                  }}>
                  LOGOUT
                </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.lineView}></View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.title}>Gender</Text>
                <Text style={styles.price}>Male</Text>

                <Text style={styles.title}>Membership</Text>
                <Text style={styles.price}>Primum</Text>
              </View>
              <View style={styles.lineView1}></View>
              <View>
                <Text style={styles.title}>Weight</Text>
                <Text style={styles.price}>60.5</Text>

                <Text style={styles.title}>HK Cash</Text>
                <Text style={styles.price}>₹ 500</Text>
              </View>
              <View style={styles.lineView1}></View>
              <View>
                <Text style={styles.title}>Goal</Text>
                <Text style={styles.price}>Weight Loss</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              color: colors.textGreyB,
              fontWeight: 'bold',
            }}>
            QUICK LINKS
          </Text>
          <ProfileItem />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paymentDetailsView: {
    height: '30%',
    marginHorizontal: 20,
    backgroundColor:colors.white,
    marginTop: 20,

    borderRadius: 10,
    elevation: 5,
  },
  priceDetails: {
    color:colors.textGreyB,
    fontSize: 18,
    marginTop: 15,
  },
  lineView: {
    height: 0.5,
    backgroundColor:colors.lightGreyBg,
    marginVertical: 5,
  },
  lineView1: {
    height: 120,
    width: 0.5,
    backgroundColor:colors.lightGreyBg,
    marginVertical: 5,
  },
  title: {
    fontSize: 15,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  price: {
    fontSize: 15,
    marginHorizontal: 15,

    color: colors.themeColor,
  },
 
 
});
const mapStateToProps = state => {
  return {
    userData: state.authreducer.userData,
  };
};

export default connect(mapStateToProps)(Profile);
