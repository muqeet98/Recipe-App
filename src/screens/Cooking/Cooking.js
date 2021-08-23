import React, {useState} from 'react';
import {View, Pressable, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  Container,
  Icon,
  ResponsiveText,
  Input,
  SuccessModal,
} from '../../components';
import styles from './index';

const Cooking = ({navigation}) => {
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChooseIngredients')}>
            <Icon.cross size={25} />
          </TouchableOpacity>
          <ResponsiveText>3/3</ResponsiveText>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.activeTab} />
          <View style={styles.activeTab} />
          <View style={styles.activeTab} />
        </View>
        <ResponsiveText style={styles.mainTitle}>
          What Is The Way Of Cooking Step By Step?
        </ResponsiveText>
        <View style={styles.addSteps}>
          <ResponsiveText style={{color: '#BBBBBB', paddingTop: 5}}>
            Add Steps
          </ResponsiveText>
          <TouchableOpacity
            // onPress={() => setModalVisible(true)}
            style={styles.IconColor}>
            <View style={{alignSelf: 'center'}}>
              <Icon.add size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.foodContainer}>
          <View style={styles.qty}>
            <ResponsiveText style={styles.qtyText}>1</ResponsiveText>
          </View>

          <Input
            style={styles.input}
            placeholder="Tell a little about your food"
            textColor={'#BBBBBB'}
            onChangeText={text => setText(text)}
            defaultValue={text}
            multiline={true}
          />
        </View>
        <View style={styles.cameraContainer}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignSelf: 'center'}}>
            <Icon.camera size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.videoContainer}>
          <ResponsiveText style={{fontSize: 4}}>
            If you have cooking video please Upload?
          </ResponsiveText>
          <ResponsiveText style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </ResponsiveText>
        </View>
        <View style={styles.videoUpload}>
          <TouchableOpacity style={styles.videoTouchable}>
            <Icon.upload size={25} />
          </TouchableOpacity>
          <ResponsiveText style={styles.videoText}>Video Upload</ResponsiveText>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <ResponsiveText style={styles.publishTxt}>PUBLISH</ResponsiveText>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
            }}>
            <Icon.iconrigt size={20} />
          </View>
        </TouchableOpacity>
      </ScrollView>
      <SuccessModal
        modalVisible={modalVisible}
        CloseModal={() => setModalVisible(false)}
        navigation={navigation}
      />
    </Container>
  );
};

export default Cooking;
