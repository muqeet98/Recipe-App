import React from 'react';
import {StatusBar, View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ResponsiveText from './ResponsiveText';

function AppHeader({
  navigation,
  name,
  description,
  Icon,
  homeImage,
  headerImage,
}) {
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor="#F5F5F5"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      <View style={styles.headerContainer}>
        <View style={{width: '70%'}}>
          <View style={styles.nameContainer}>
            {name ? (
              <ResponsiveText style={styles.name}>{name}</ResponsiveText>
            ) : null}

            {Icon ? Icon : null}
          </View>
          <View>
            {description ? (
              <ResponsiveText style={styles.description}>
                {description}
              </ResponsiveText>
            ) : null}
          </View>
        </View>
        {!homeImage && (
          <View style={{marginLeft: 5}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={styles.profile}>
              {headerImage}
            </TouchableOpacity>
          </View>
        )}
        {homeImage && (
          <View
            style={{
              width: wp(30),
              justifyContent: 'center',
              alignItems: 'center',
              bottom: 15,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={require('../assets/Images/test.png')}
                style={{right: -15}}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
export default AppHeader;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    //backgroundColor: 'red',
  },
  name: {
    fontSize: 9,
    color: '#262626',
  },
  description: {
    color: '#707070',
  },

  homeImage: {
    backgroundColor: 'red',
  },
  titleContainer: {
    justifyContent: 'space-between',
  },
});
