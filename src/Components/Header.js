import React from "react";
import { View, Text,StyleSheet,StatusBar, TextInput,Image,TouchableOpacity } from "react-native";
import imagePath from "../constants/imagePath";
import navigationStrings from "../constants/navigationStrings";

import {useNavigation} from "@react-navigation/native"
import colors from "../styles/colors";


export default function Header({cartCount}) {

    const navigation = useNavigation()

    
    return (
        <View>
            <StatusBar barStyle="dark-content" backgroundColor={colors.themeColor} />
            <View style={styles.headerBar}>
                <View style={styles.logoView}>
                <Text style={{color:colors.white,fontSize:20}}>CART MANAGEMENT</Text>
                <View style={styles.miceCartIconView}>
                <Image source={imagePath.notification} style={styles.notificationIcon} resizeMode="contain"/>
               <TouchableOpacity onPress={()=>{
                 navigation.navigate(navigationStrings.CARTPRODUCT, {data,totalDiscountPrice:totalDiscountPrice});
               }}>
                <View>
                    <Text style={styles.cartCount}>{cartCount}</Text>
                <Image source={imagePath.cart} style={styles.cartIcon} resizeMode="contain"/>
                </View>
                </TouchableOpacity>
                </View>
                </View>
                
            </View>

        </View>
    )
}
const styles=StyleSheet.create({
    headerBar:{
        height:50,
        backgroundColor:colors.themeColor,
        alignItems:'center',
      
    },
    logoView:{
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:10,
        marginVertical:5,
        alignItems:"center"
    },
    searchBarView:{
        width:'95%',
        height:"40%",
        backgroundColor:'white',
        borderRadius:5,
        elevation:10,
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        marginTop:'auto'
        
    },
    searchIcon:{
        height:20,
        width:"7%"
    },
    cameraIcon:{
        height:25,
        width:"7%"
    },
    searcTextInput:{
        width:"86%",
        height:40,
        fontSize:18,
        fontWeight:"bold",
        paddingVertical:5
    },
    drawerIcon:{
        height:30,
        width:30,
        marginVertical:13
    },
    amazonIcon:{
        height:50,
        width:100,
        marginHorizontal:20
    },
    miceCartIconView:{
        marginLeft:'auto',
        flexDirection:'row',
        alignItems:'center'
    },
    microphoneIcon:{
        height:25,
        width:25,
        marginHorizontal:20
    },
    cartIcon:{
        height:50,
        width:50,
        position:'relative'
    },notificationIcon:{
        height:20,
        width:20,
        right:'15%',
        position:'relative'
    },
 
    cartCount:{
        fontSize:16,
        position:'absolute',
        left:"45%",
        top:"15%",
        color:'red'
    }
})