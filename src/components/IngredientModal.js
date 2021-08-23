import React from 'react';
import {Dimensions, StyleSheet, Text, View, LogBox, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ResponsiveText from './ResponsiveText';
import Icon from '../theme/icons';

const windowHeight = Dimensions.get('window').height;
LogBox.ignoreAllLogs();

function IngredientModal({modalVisible, setModalVisible}) {
  const DATA = [
    {
      id: '1',
      image: require('../assets/Images/Tomato1.png'),
      title: 'Tomato',
    },
    {
      id: '1',
      image: require('../assets/Images/greens1.png'),
      title: 'Greens',
    },
    {
      id: '1',
      image: require('../assets/Images/onion1.png'),
      title: 'Onion',
    },
    {
      id: '1',
      image: require('../assets/Images/cheese.png'),
      title: 'Cheese',
    },
    {
      id: '1',
      image: require('../assets/Images/Cucumber.png'),
      title: 'Cucumber',
    },
    {
      id: '1',
      image: require('../assets/Images/Garlic.png'),
      title: 'Garlic',
    },
    {
      id: '1',
      image: require('../assets/Images/bread.png'),
      title: 'Bread',
    },
    {
      id: '1',
      image: require('../assets/Images/oil.png'),
      title: 'Oil',
    },
  ];
  if (modalVisible)
    return (
      <ScrollBottomSheet
        componentType="FlatList"
        snapPoints={[128, '50%', windowHeight - 300]}
        initialSnapIndex={2}
        renderHandle={() => (
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.panelHandle}
              onPress={() => setModalVisible(false)}></TouchableOpacity>
            <View style={styles.searchContainer}>
              <View style={styles.search}>
                <ResponsiveText
                  style={{textAlignVertical: 'center', fontSize: 3}}>
                  Search Ingredients...
                </ResponsiveText>
                <Icon.IconSearch size={25} />
              </View>

              <View style={styles.ingredientView}>
                <TouchableOpacity>
                  <View style={{alignSelf: 'center'}}>
                    <Icon.upArrow size={25} color={'#FFF'} />
                  </View>
                  <ResponsiveText style={styles.ingredientText}>
                    Ingredient
                  </ResponsiveText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        data={DATA}
        numColumns={4}
        keyExtractor={i => i}
        renderItem={({item}) => (
          <View style={styles.imgContainer}>
            <Image
              source={item.image}
              style={styles.imageList}
              resizeMode="contain"
            />
            <ResponsiveText
              style={{alignSelf: 'center', fontSize: 3, marginBottom: 10}}>
              {item.title}
            </ResponsiveText>
          </View>
        )}
        contentContainerStyle={styles.contentContainerStyle}
      />
    );
  return null;
}

export default IngredientModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  contentContainerStyle: {
    padding: 10,
    backgroundColor: '#F3F4F9',
    flex: 1,
    opacity: 5,
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    marginBottom: hp(5),
    width: 50,
    height: 3,
    backgroundColor: 'rgba(0,0,0,0.3)',
    //backgroundColor: '#000',
    borderRadius: 4,
  },
  item: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 10,
  },
  imgContainer: {
    width: wp(22),
    borderRadius: 10,
    marginHorizontal: wp(1),
    backgroundColor: '#FFFFFF',
    marginBottom: hp(2),
  },
  imageList: {
    width: wp(10),
    height: hp(10),

    alignSelf: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    width: wp(60),
    borderRadius: 10,
    elevation: 2,
  },
  ingredient: {
    //  backgroundColor: '#4EAA81',
    width: wp(30),
  },
  ingredientView: {
    marginRight: wp(5),
    backgroundColor: '#4EAA81',
    padding: 10,
    height: hp(10),
    borderRadius: 10,
    width: wp(30),
    left: wp(5),
  },
  ingredientText: {
    color: '#fff',
    fontSize: 3,
    alignSelf: 'center',
  },
});
