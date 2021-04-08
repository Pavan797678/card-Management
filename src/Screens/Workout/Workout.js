import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
 Dimensions
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

const {height,width}=Dimensions.get("window")

export default class Workout extends Component{

    render(){
        return(
            <ImageZoom cropWidth={width}
            cropHeight={height}
            imageWidth={200}
            imageHeight={200}>
     <Image style={{width:200, height:200}}
            source={{uri:'http://joombig.com/demo-extensions1/images/gallery_slider/Swan_large.jpg'}}/>
 </ImageZoom>
        )
    }
}