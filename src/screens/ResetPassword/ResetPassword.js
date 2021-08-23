import React, {useState} from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import {Container, ResponsiveText, Icon, Input, Button} from '../../components';
import styles from './index';

const EditProfile = ({navigation}) => {
  const [name, setName] = useState('John doe');
  const [email, setEmail] = useState('john@gmail.com');
  const [about, setAbout] = useState('I am graphic designer');
  const [password, setPassword] = useState('1223');
  const [location, setLocation] = useState('');
  const [validateMail, setValidateMail] = useState(true);

  const onPress = () => {
    console.log('Save Profile');
  };

  return (
    <Container>
      <ScrollView style={styles.mainContainer}>
        <ImageBackground
          source={require('../../assets/Images/MaskGroup.png')}
          style={styles.image}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.navigate('EditProfile')}>
            <View style={{alignSelf: 'center'}}>
              <Icon.leftArrow size={25} color={'#727272'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileContainer}>
            <Image
              source={require('../../assets/Images/lock.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.textInput}>
          <ResponsiveText style={styles.name}>New password</ResponsiveText>
          <Input
            style={styles.input}
            placeholder="Name"
            textColor={'#BBBBBB'}
            onChangeText={name => setName(name)}
            defaultValue={name}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <ResponsiveText style={styles.name}>Confirm Password</ResponsiveText>
          <Input
            style={styles.input}
            placeholder="Email"
            textColor={'#BBBBBB'}
            onChangeText={email => setEmail(email)}
            defaultValue={email}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Button
            title={'UPDATE PASSWORD'}
            color="#4EAA81"
            borderWidth={1}
            fontColor="#FFFFFF"
            _onPress={onPress}
            btnContainer={{
              marginTop: 20,
            }}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default EditProfile;
