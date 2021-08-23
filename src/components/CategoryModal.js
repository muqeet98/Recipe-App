import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ResponsiveText from './ResponsiveText';

const CategoryModal = props => {
  const DATA = [
    {
      id: '1',
      image: require('../assets/Images/pizza-slice.png'),
      title: 'Sea Food',
    },
    {
      id: '1',
      image: require('../assets/Images/shrimp.png'),
      title: 'Sea Food',
    },
    {
      id: '1',
      image: require('../assets/Images/food.png'),
      title: 'Sea Food',
    },
    {
      id: '1',
      image: require('../assets/Images/pizza-slice.png'),
      title: 'Sea Food',
    },
    {
      id: '1',
      image: require('../assets/Images/shrimp.png'),
      title: 'Sea Food',
    },
    {
      id: '1',
      image: require('../assets/Images/food.png'),
      title: 'Sea Food',
    },
    {
      id: '1',
      image: require('../assets/Images/pizza-slice.png'),
      title: 'Sea Food',
    },
    {
      id: '1',
      image: require('../assets/Images/shrimp.png'),
      title: 'Sea Food',
    },
    {
      id: '1',
      image: require('../assets/Images/food.png'),
      title: 'Sea Food',
    },
  ];
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.categoryModal}
      onRequestClose={props.CloseModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ResponsiveText style={{fontSize: 5}}>
            Choose a category
          </ResponsiveText>
          <View
            style={{
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 30,
            }}>
            <FlatList
              numColumns={3}
              data={DATA}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.imgContainer}>
                  <Image
                    source={item.image}
                    style={styles.imageList}
                    resizeMode="contain"
                  />
                  <ResponsiveText
                    style={{
                      alignSelf: 'center',
                      fontSize: 3.5,
                      marginBottom: 10,
                    }}>
                    {item.title}
                  </ResponsiveText>
                </View>
              )}
            />
          </View>
          <TouchableOpacity style={styles.okButton} onPress={props.CloseModal}>
            <ResponsiveText style={{alignSelf: 'center', color: '#fff'}}>
              Ok
            </ResponsiveText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 20,
    height: hp(80),
    width: wp(90),
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
  imgContainer: {
    // marginTop: 10,
    width: wp(24),
    borderRadius: 10,
    marginHorizontal: '1.5%',
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'red',
    marginVertical: 5,
  },
  imageList: {
    marginTop: 20,
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginBottom: 5,
    backgroundColor: 'white',
  },
  okButton: {
    marginTop: hp(7),
    backgroundColor: '#4EAA81',
    padding: 15,
    width: '100%',
    borderRadius: 30,
  },
});
export default CategoryModal;
