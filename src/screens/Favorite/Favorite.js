import React from 'react';
import {View, Image, FlatList, ScrollView} from 'react-native';

import {Container, AppHeader, ResponsiveText} from '../../components';
import Icon from '../../theme/icons';
import styles from './index';

const Favorite = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      image: require('../../assets/Images/favoriteList.png'),
      title: 'All',
    },
  ];

  return (
    <Container>
      <View style={styles.mainContainer}>
        <AppHeader
          navigation={navigation}
          name={'Favorite '}
          headerImage={
            <Image
              resizeMode="cover"
              source={require('../../assets/Images/profile.png')}
            />
          }
        />
        <View style={styles.horizontalList}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}>
            <View style={styles.filterContainer}>
              <Icon.filter size={20} color={'#727272'} />
              <ResponsiveText style={{marginLeft: 5, color: '#727272'}}>
                Filter and sort
              </ResponsiveText>
            </View>
            <View style={styles.newToOld}>
              <ResponsiveText style={{color: '#727272', marginRight: 10}}>
                New to old
              </ResponsiveText>
              <View style={styles.deleteContainer}>
                <Icon.delIcon size={20} color={'#727272'} />
              </View>
            </View>
            <View style={styles.newToOld}>
              <ResponsiveText style={{color: '#727272', marginRight: 10}}>
                Italian
              </ResponsiveText>
              <View style={styles.deleteContainer}>
                <Icon.delIcon size={20} color={'#727272'} />
              </View>
            </View>
          </ScrollView>
        </View>

        <FlatList
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.mainListView}>
              <View style={styles.listContainer}>
                <Image
                  style={styles.listImage}
                  source={item.image}
                  //resizeMode="contain"
                />
                <View style={styles.listText}>
                  <View style={styles.foodName}>
                    <ResponsiveText style={styles.greekSalad}>
                      Greek Salad
                    </ResponsiveText>
                    <View style={styles.favoriteIcon}>
                      <Icon.favorite size={30} />
                    </View>
                  </View>
                  <View style={styles.timeView}>
                    <Icon.stopwatch size={20} />
                    <ResponsiveText style={styles.minutes}>
                      45 Min
                    </ResponsiveText>
                  </View>
                  <View style={styles.seafoodView}>
                    <ResponsiveText style={styles.seafood}>
                      Seafood
                    </ResponsiveText>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </Container>
  );
};

export default Favorite;
