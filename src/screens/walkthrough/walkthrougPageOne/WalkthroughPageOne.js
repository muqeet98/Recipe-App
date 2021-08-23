import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {Container, ResponsiveText} from '../../../components';
import styles from './index';

const WalkthroughPageOne = ({navigation}) => {
  return (
    <Container backgroundColor="#4EAA81" barStyle="light-content">
      <View style={styles.mainContainer}>
        <View style={styles.background}>
          <View style={styles.imgContainer}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/Images/walkThrough.png')}
              style={styles.imgStyle}
            />
          </View>
          <View style={styles.cooking}>
            <ResponsiveText style={styles.startCooking}>
              Start Cooking
            </ResponsiveText>
            <ResponsiveText style={styles.somethingNew}>
              Cook Something New Every Day!
            </ResponsiveText>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.rightArrow}
              onPress={() => navigation.navigate('walkthrougPageThree')}>
              <Image
                style={styles.rightArrow}
                resizeMode="contain"
                source={require('../../../assets/Icons/rightArrow.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default WalkthroughPageOne;
