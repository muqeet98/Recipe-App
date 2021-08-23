import React, {useState} from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import {
  Container,
  ResponsiveText,
  Icon,
  Input,
  Button,
  EditProfileInput,
} from '../../components';
import styles from './index';

const EditProfile = ({navigation}) => {
  const [name, setName] = useState('John doe');
  const [email, setEmail] = useState('john@gmail.com');
  const [about, setAbout] = useState('I am graphic designer');
  const [password, setPassword] = useState('1223');

  const onPress = () => {
    console.log('Save Profile');
  };

  return (
    <Container>
      <ScrollView style={styles.mainContainer}>
        <ImageBackground
          source={require('../../assets/Images/editprofile.png')}
          style={styles.image}>
          <TouchableOpacity style={styles.backIcon} onPress={()=> navigation.navigate("Profile")}>
            <View style={{alignSelf: 'center', marginTop: 10}}>
              <Icon.leftArrow size={25} color={'#727272'} />
            </View>
          </TouchableOpacity>
          <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/Images/profile1.png')}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.changePhoto}>
              <ResponsiveText
                style={{color: '#FFFFFF', fontSize: 3.5, textAlign: 'center'}}>
                Change Photo
              </ResponsiveText>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.textInput}>
          <ResponsiveText style={styles.name}>Your Name</ResponsiveText>
          <EditProfileInput
            style={styles.input}
            placeholder="Name"
            textColor={'#BBBBBB'}
            onChangeText={name => setName(name)}
            defaultValue={name}
          />
        </View>
        <View style={styles.textInput}>
          <ResponsiveText style={styles.name}>Email</ResponsiveText>
          <EditProfileInput
            style={styles.input}
            placeholder="Email"
            textColor={'#BBBBBB'}
            onChangeText={email => setEmail(email)}
            defaultValue={email}
          />
        </View>
        <View style={styles.textInput}>
          <ResponsiveText style={styles.name}>About</ResponsiveText>
          <EditProfileInput
            style={styles.input}
            placeholder="About"
            textColor={'#BBBBBB'}
            onChangeText={about => setAbout(about)}
            defaultValue={about}
          />
        </View>
        <View style={styles.textInput}>
          <ResponsiveText style={styles.name}>Reset Password</ResponsiveText>
          <View style={styles.passwordContainer}>
            <EditProfileInput
              style={styles.passwordInput}
              placeholder="Password"
              textColor={'#BBBBBB'}
              onChangeText={about => setAbout(about)}
              defaultValue={about}
            />
            <TouchableOpacity style={styles.rightarrow}>
              <Icon.rightInput_Icon size={25} color={'#727272'} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textInput}>
          <ResponsiveText style={styles.name}>Location</ResponsiveText>
          <View style={styles.passwordContainer}>
            <TouchableOpacity style={styles.locationIcon}>
              <Icon.location size={25} color={'#4EAA81'} />
            </TouchableOpacity>

            <EditProfileInput
              style={styles.passwordInput}
              placeholder="Venture drive"
              textColor={'#BBBBBB'}
              onChangeText={about => setAbout(about)}
              defaultValue={about}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Button
            title={'SAVE PROFILE'}
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
