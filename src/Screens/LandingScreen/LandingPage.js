import React, {Component} from 'react';
import {Text, View, Dimensions, Image, ImageBackground} from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import String from '../../constants/lang/index';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';

const {height, width} = Dimensions.get('screen');

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          id: 0,
          image: imagePath.landingImage,
          title: 'Shop Genuine Health Supplements',
          outerScreen: false,
        },
        {
          id: 1,
          image: imagePath.landingImage1,
          title: 'Shop Genuine Health Supplements',
          outerScreen: false,
        },
        {
          id: 2,
          image: imagePath.landingImage2,
          title: 'Shop Genuine Health Supplements',
          outerScreen: false,
        },
        {
          id: 3,
          image: imagePath.landingImage2,
          title: 'Shop Genuine Health Supplements',
          outerScreen: false,
        },
      ],
    };
  }

  signUpScreenNavigation = () => {
    const {navigation} = this.props;

    navigation.navigate(navigationStrings.SIGN_UP);
  };
  loginScreenNavigation = () => {
    const {navigation} = this.props;

    navigation.navigate(navigationStrings.LOGIN);
  };

  get pagination() {
    const {carouselItems, activeIndex} = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor:colors.white,
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  _renderItem({item, index}) {
    if (index != 3) {
      return (
        <View>
          <Image
            style={styles.itemImageStyle}
            source={item.image}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
    } else {
      return <></>;
    }
  }

  render() {
    const {carouselItems, activeIndex} = this.state;
    console.log(activeIndex);
    return (
      <WrapperContainer statusBarColor={colors.black}>
        <View style={styles.containerView}>
          {activeIndex != 3 ? (
            <View style={{flex: 1}}>
              <View>
                <View
                  style={styles.crouselViewStyles}>
                  <Carousel
                    data={carouselItems}
                    sliderWidth={100}
                    itemWidth={width}
                    renderItem={this._renderItem}
                    onSnapToItem={index => this.setState({activeIndex: index})}
                  />
                </View>
                {this.pagination}
              </View>
              <View style={styles.buttonContainer}>
                <ButtonWithLoader btnText={String.GET_STARTED} />
              </View>
            </View>
          ) : (
            <ImageBackground
              source={imagePath.loginchoiceImage}
              style={styles.image}>
              <View
                style={styles.buttonOuterView}>
                <View style={styles.ButtonView}>
                  <ButtonWithLoader
                    onPress={this.signUpScreenNavigation}
                    btnText={String.SIGN_UP}
                  />
                </View>

                <View style={styles.ButtonView}>
                  <ButtonWithLoader
                    onPress={this.loginScreenNavigation}
                    btnText={String.LOGIN}
                  />
                </View>
              </View>
            </ImageBackground>
          )}
        </View>
      </WrapperContainer>
    );
  }
}
