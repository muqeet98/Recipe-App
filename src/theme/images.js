import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import splash from '../assets/Images/Splash.png';

const Images = {
  splash: (style = {}) => (
    <Image source={splash} style={{...styles.defaultStyle, ...style}} />
  ),
};

export default Images;

const styles = StyleSheet.create({
  defaultStyle: {
    height: wp('5%'),
    width: wp('5%'),
    resizeMode: 'contain',
  },
  tabBar: {
    height: wp('7%'),
    width: wp('7%'),
    resizeMode: 'contain',
  },
});
