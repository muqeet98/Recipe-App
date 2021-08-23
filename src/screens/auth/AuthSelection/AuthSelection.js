import React from 'react';
import {View, ImageBackground, StatusBar, Image} from 'react-native';

import styles from './index';
import Button from '../../../components/Button';
import Container from '../../../components/Container';

const AuthSelection = ({navigation}) => {
  const image = require('../../../assets/Images/loginBackground.png');

  const login = () => {
    navigation.navigate('Login');
  };
  const register = () => {
    navigation.navigate('Register');
  };
  const guest = () => {
    // navigation.navigate('Guest');
  };
  return (
    <Container>
      {/* <ImageBackground
        resizeMode="cover"
        source={image}
        style={styles.backgroundImage}> */}
        <View style={styles.backgroundImage}>
        <View style={styles.logo}>
          <Image
            source={require('../../../assets/Icons/score.png')}
            resizeMode="contain"
            style={{width: 150, height: 100, marginTop: 50}}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button title={'LOGIN'} color="#FFFFFF" _onPress={login} />
          <Button
            title={'REGISTER'}
            color="#4EAA81"
            borderWidth={1}
            fontColor="#FFFFFF"
            _onPress={register}
            btnContainer={{
              marginTop: 20,
            }}
          />
          <Button
            // title={'USE AS GUEST'}
            //color="#131718"
            fontColor="#FFFFFF"
            _onPress={guest}
            btnContainer={{
              marginTop: 20,
            }}
          />
        </View>
        </View>
      {/* </ImageBackground> */}
    </Container>
  );
};

export default AuthSelection;
