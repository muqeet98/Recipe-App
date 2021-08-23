import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  Input,
  Container,
  ResponsiveText,
  Icon,
  Button,
} from '../../../components';
import styles from './styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeField, setActiveField] = useState('');
  const [validateMail, setValidateMail] = useState(false);

  const validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setValidateMail(false);
      setEmail({email: text});
      return false;
    } else {
      setEmail({email: text});
      setValidateMail(true);
    }
  };
  const onPress = () => {
    navigation.navigate('Profile');
  };

  return (
    <Container backgroundColor="#fff" barStyle="dark-content">
      <ScrollView>
        <View style={styles.mainContainer}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../../../assets/Icons/loginscore.png')}
          />
          <ResponsiveText style={styles.welcome}>Welcome,</ResponsiveText>
          <ResponsiveText style={styles.foodplant}>
            sign in to continue.
          </ResponsiveText>
          <Input
            icon={<Icon.email size={20} />}
            validateMail={validateMail ? <Icon.checked size={25} /> : null}
            style={styles.input}
            placeholder="Email"
            textColor={'#BBBBBB'}
            onChangeText={text => validate(text)}
            defaultValue={email}
            active={activeField === 'email'}
            onFocus={() => {
              setActiveField('email');
            }}
            onBlur={() => {
              setActiveField('');
            }}
          />

          <Input
            style={styles.input}
            icon={<Icon.password size={20} />}
            placeholder="Password"
            textColor={'#BBBBBB'}
            onChangeText={password => setPassword(password)}
            defaultValue={password}
            active={activeField === 'password'}
            onFocus={() => {
              setActiveField('password');
            }}
            onBlur={() => {
              setActiveField('');
            }}
          />

          <Button
            title={'LOGIN'}
            color="#4EAA81"
            borderWidth={1}
            fontColor="#FFFFFF"
            _onPress={onPress}
            btnContainer={{
              marginTop: 40,
              right: 10,
            }}
          />
{/*
          <View style={styles.socialButton}>
            <TouchableOpacity>
              <Image
                style={styles.facebook}
                resizeMode="contain"
                source={require('../../../assets/Icons/facebook.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.google}
                resizeMode="contain"
                source={require('../../../assets/Icons/google.png')}
              />
            </TouchableOpacity>
            <ResponsiveText style={styles.loginWith}>
              OR LOGIN WITH
            </ResponsiveText>
          </View> */}

          <View style={styles.signupButton}>
            <ResponsiveText style={styles.account}>
              Don't have an account?
            </ResponsiveText>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <ResponsiveText style={styles.signup}> Sign up</ResponsiveText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;
