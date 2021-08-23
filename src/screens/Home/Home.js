import React from 'react';
import {View, Image, FlatList, ScrollView} from 'react-native';
import {Container, Icon, ResponsiveText} from '../../components';
import styles from './index';
import AppHeader from '../../components/AppHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';

const Home = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      image: require('../../assets/Images/tray.png'),
      title: 'All',
    },
    {
      id: '2',
      image: require('../../assets/Images/pizza-slice.png'),

      title: 'Fast Food',
    },
    {
      id: '3',
      image: require('../../assets/Images/shrimp.png'),

      title: 'Sea Food',
    },
    {
      id: '4',
      image: require('../../assets/Images/food.png'),

      title: 'Asian Food',
    },
  ];
  const DATASECONDlIST = [
    {
      id: '1',
      image: require('../../assets/Images/chickenWings.png'),
      title: 'Special fried chicken wings',
      name: 'Fast Food',
    },
    {
      id: '2',
      image: require('../../assets/Images/chickenWings.png'),
      title: 'Special fried chicken wings',
      name: 'Fast Food',
    },
    {
      id: '3',
      image: require('../../assets/Images/chickenWings.png'),
      title: 'Special fried chicken wings',
      name: 'Fast Food',
    },
    {
      id: '4',
      image: require('../../assets/Images/chickenWings.png'),
      title: 'Special fried chicken wings',
      name: 'Fast Food',
    },
  ];
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image
          style={styles.scrollView}
          resizeMode="contain"
          source={item.image}
        />
        <View style={styles.cardBottom}>
          <View>
            <ResponsiveText style={{fontSize: 6}}>Greek Salad</ResponsiveText>
            <View style={{flexDirection: 'row'}}>
              <ResponsiveText style={{color: '#727272', fontSize: 3}}>
                6 Ingredients
              </ResponsiveText>
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.dot}></View>
                <View style={{marginLeft: 10, flexDirection: 'row'}}>
                  <Icon.timeIcon size={15} />
                  <ResponsiveText
                    style={{
                      color: '#727272',
                      marginLeft: 2,
                      fontSize: 3,
                      textAlignVertical: 'center',
                    }}>
                    40 min
                  </ResponsiveText>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bookmark}>
            <Icon.ribbon size={25} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <Container>
      <ScrollView style={styles.mainContainer}>
        <AppHeader
          navigation={navigation}
          name={'Hi! Zack '}
          description={'What Food You Want To Cook?'}
          Icon={<Icon.setting size={25} />}
          homeImage
        />
        <View style={styles.titleContainer}>
          <ResponsiveText style={styles.recipes}>Recipes</ResponsiveText>
          <ResponsiveText style={styles.viewAll}>View All</ResponsiveText>
        </View>

        <FlatList
          data={DATA}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image
                style={styles.cardImage}
                resizeMode="contain"
                source={item.image}
              />
              <ResponsiveText style={styles.cardTitle}>
                {item.title}
              </ResponsiveText>
            </View>
          )}
        />
        <View style={styles.titleContainer2}>
          <ResponsiveText style={styles.recipes}>
            Special for you
          </ResponsiveText>
          <ResponsiveText style={styles.viewAll}>View All</ResponsiveText>
        </View>
        {/* ////////////////// */}
        {/* <View style={{backgroundColor: 'yellow'}}> */}
        <Carousel
          layout={'default'}
          data={DATASECONDlIST}
          renderItem={_renderItem}
          sliderWidth={420}
          itemWidth={290}
        />
        {/* </View> */}
        {/* ////////////////// */}

        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.recipeButton}
            onPress={() => navigation.navigate('AddRecipe')}>
            <ResponsiveText
              style={{color: '#fff', textAlignVertical: 'center'}}>
              Add Recipe
            </ResponsiveText>
            <View style={styles.icon}>
              <Icon.arrow size={20} color={'#4EAA81'} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;
