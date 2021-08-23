import React from 'react';
import {Modal, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import ResponsiveText from './ResponsiveText';
import Icon from '../theme/icons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const WheelModal = props => {
  console.log('props.CloseModal', props.CloseModal);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.CloseModal}>
      {/* <TouchableOpacity style={styles.centeredView} onPress={props.CloseModal}> */}
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={require('../../src/assets/Icons/success.png')}
            style={{width: wp(80)}}
          />
          <ResponsiveText
            style={{marginTop: hp(3), fontSize: 6, color: '#727272'}}>
            Upload Success
          </ResponsiveText>
          <ResponsiveText style={styles.text}>
            Your recipe has been uploaded,you can see it on your profile.
          </ResponsiveText>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => props.navigation.navigate('Profile')}>
              <ResponsiveText style={styles.backText}>HOME</ResponsiveText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => props.navigation.navigate('Profile')}>
              <ResponsiveText style={styles.nextText}>PROFILE</ResponsiveText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </TouchableOpacity> */}
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    height: hp(70),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  text: {
    color: '#727272',
    textAlign: 'center',
    paddingHorizontal: 12,
    marginTop: hp(2),
    fontSize: 4,
  },
  button: {
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    backgroundColor: '#F2F2F2',
    width: wp(30),
    padding: 14,
    borderRadius: 30,
    right: 12,
  },
  nextButton: {
    backgroundColor: '#4EAA81',
    width: wp(30),
    padding: 14,
    borderRadius: 30,
    left: 12,
  },
  backText: {
    alignSelf: 'center',
    color: '#727272',
  },
  nextText: {
    alignSelf: 'center',
    color: '#fff',
  },
});
export default WheelModal;
