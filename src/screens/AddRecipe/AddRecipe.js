import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {
  Container,
  Icon,
  ResponsiveText,
  Input,
  WheelModal,
  CategoryModal,
} from '../../components';
import styles from './index';

const AddRecipe = ({navigation}) => {
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);

  return (
    <Container>
      <WheelModal
        modalVisible={modalVisible}
        CloseModal={() => setModalVisible(false)}
      />
      <CategoryModal
        categoryModal={categoryModal}
        CloseModal={() => setCategoryModal(false)}
      />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon.cross size={25} />
          </TouchableOpacity>
          <ResponsiveText>1/3</ResponsiveText>
        </View>
        <View style={styles.ProgressBar}>
          <View style={styles.activeTab} />
          <View style={styles.inactiveTab} />
          <View style={styles.inactiveTab} />
        </View>
        <TouchableOpacity style={styles.coverContainer}>
          <View style={{alignSelf: 'center', marginTop: 20}}>
            <Icon.addCover size={50} />
          </View>
          <ResponsiveText style={styles.addCover}>
            Add Cover Photo
          </ResponsiveText>
          <ResponsiveText style={styles.uptoMb}>(up to 12 Mb)</ResponsiveText>
        </TouchableOpacity>
        <ResponsiveText style={styles.percentage}>100%</ResponsiveText>
        <View style={styles.percentageView}></View>
        <Input
          style={styles.input}
          placeholder="Recipe Name"
          textColor={'#BBBBBB'}
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <View style={styles.timePicker}>
          <ResponsiveText style={{color: '#BBBBBB'}}>
            Cooking duration time
          </ResponsiveText>

          <Pressable onPress={() => setModalVisible(true)}>
            <Icon.downArrrow size={20} />
          </Pressable>
        </View>

        <View style={styles.timePicker}>
          <ResponsiveText style={{color: '#BBBBBB'}}>Category</ResponsiveText>
          <Pressable onPress={() => setCategoryModal(true)}>
            <Icon.downArrrow size={20} />
          </Pressable>
        </View>
        <Input
          style={styles.description}
          placeholder="Description"
          textColor={'#BBBBBB'}
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ChooseIngredients')}>
          <View style={styles.textContainer}>
            <ResponsiveText style={{color: '#fff'}}>Next</ResponsiveText>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
            }}>
            <Icon.iconrigt size={20} color={'white'} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default AddRecipe;
