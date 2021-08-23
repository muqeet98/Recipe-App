import React, {useEffect} from 'react';
import {View, ImageBackground, StatusBar} from 'react-native';

import Container from '../../components/Container';
import Icons from '../../theme/icons';
import styles from './index';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AuthSelection');
    }, 1000);
  }, []);

  return (
    <Container backgroundColor={'#4EAA81'}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require('../../assets/Images/Splash.png')}>
        <View style={styles.logo}>
          <Icons.logo size={134} color="#FFFFFF" />
        </View>
      </ImageBackground>
    </Container>
  );
};
export default Splash;
