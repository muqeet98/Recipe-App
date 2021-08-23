import React from 'react';
import {View, Image, TouchableOpacity, FlatList,Linking} from 'react-native';
import {Container, ResponsiveText} from '../../components';
import styles from './index';

const Profile = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      image: "https://qph.fs.quoracdn.net/main-qimg-5d31a74a0fdc2489c87a65bb61d39507.webp",
      pdflink: "https://library.oapen.org/bitstream/id/cf7797b9-1f98-4474-9e87-d4f0f1c4b449/633792.pdf",
      title: 'Mathematics',
    },
    {
      id: '2',
      image: "https://thumbs.dreamstime.com/z/physics-open-book-doodles-lettering-physics-open-book-doodles-lettering-education-vector-illustration-135558394.jpg",
      pdflink:"https://library.oapen.org/bitstream/id/cf7797b9-1f98-4474-9e87-d4f0f1c4b449/633792.pdf",
      title: 'Physics',
    },
    {
      id: '3',
      image: "https://static3.bigstockphoto.com/4/5/2/large1500/254911732.jpg",
      pdflink:"https://library.oapen.org/bitstream/id/cf7797b9-1f98-4474-9e87-d4f0f1c4b449/633792.pdf",
      title: 'Computer',
    },

  ];
  return (
    <Container>
      <View style={styles.mainContainer}>
        <View>
          <Image
            source={require('../../assets/Images/profile1.png')}
            resizeMode="contain"
            style={{
              width: 100,
              marginTop: 10,
              marginLeft: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.editProfile}>
            <ResponsiveText style={{color: '#fff', fontSize: 3}}>
              Edit Profile
            </ResponsiveText>
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <ResponsiveText style={styles.firstName}>
            David <ResponsiveText style={styles.lastName}>Bruno</ResponsiveText>
          </ResponsiveText>
          <ResponsiveText style={styles.description}>
            Davidbruno@gmail.com
          </ResponsiveText>
          {/* <ResponsiveText style={styles.description1}>
            Rhoncus ipsum eget tempus. Present fermentum sa rhoncus.
          </ResponsiveText> */}
        </View>
      </View>


      <FlatList
        data={DATA}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={ ()=>{ Linking.openURL(item.pdflink)}}>
            <Image style={styles.cardImage}  source={{uri: item.image}}/>
            <ResponsiveText style={styles.description}>
           {item.title}
          </ResponsiveText>
          </TouchableOpacity>
          </View>
        )}
      />
    </Container>
  );
};

export default Profile;
