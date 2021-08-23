import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TimePicker} from 'react-native-wheel-picker-android';
import {ResponsiveText} from '../components';

const WheelModal = props => {
  const onTimeSelected = time => {
    console.log('test', time);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.CloseModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ResponsiveText style={{fontSize: 5, marginBottom: 20}}>
            Time To Cook
          </ResponsiveText>
          <TimePicker onTimeSelected={onTimeSelected} />
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
    //marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '80%',
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  okButton: {
    marginTop: 10,
    backgroundColor: '#4EAA81',
    padding: 15,
    width: '100%',
    borderRadius: 30,
  },
});
export default WheelModal;
