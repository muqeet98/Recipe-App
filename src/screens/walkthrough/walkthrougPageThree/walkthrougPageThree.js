import React from 'react';
import {View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container, ResponsiveText, Button} from '../../../components';
import styles from './styles';

const WalkthroughPageThree = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('AuthSelection');
  };
  return (
    <Container>
      <View style={styles.mainContainer}>
        <View style={styles.topImages}>
          <Image
            source={require('../../../assets/Images/logo3.png')}
            resizeMode="contain"
            style={styles.logo3}
          />
        </View>

        <View style={styles.startCooking}>
          <ResponsiveText style={styles.cooking}>Start Cooking</ResponsiveText>
          <ResponsiveText style={styles.description}>
            Let's join our community to cook better food!
          </ResponsiveText>
        </View>
        <View style={styles.getStart}>
          <Button
            title={'GET START'}
            color="#FFFFFF"
            borderWidth={1}
            fontColor="#000000"
            _onPress={onPress}
            btnContainer={{
              marginTop: 30,
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default WalkthroughPageThree;
