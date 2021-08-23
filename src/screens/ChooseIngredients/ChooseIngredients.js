import React, {useState} from 'react';
import {View, Pressable, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  Container,
  Icon,
  ResponsiveText,
  IngredientModal,
} from '../../components';
import styles from './index';

const ChooseIngredients = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('AddRecipe')}>
            <Icon.cross size={25} />
          </TouchableOpacity>
          <ResponsiveText>2/3</ResponsiveText>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.activeTab} />
          <View style={styles.activeTab} />
          <View style={styles.inactiveTab} />
        </View>
        <ResponsiveText style={styles.ingredients}>
          What's in your ingredients?
        </ResponsiveText>
        <ResponsiveText style={styles.text}>
          lorem ipsum ingredients.
        </ResponsiveText>
        <View style={styles.ingredienContainer}>
          <ResponsiveText
            style={{color: '#BBBBBB', textAlignVertical: 'center'}}>
            Add your ingredients...
          </ResponsiveText>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.IconColor}>
            <View style={{alignSelf: 'center'}}>
              <Icon.downArrrow size={20} />
            </View>
          </Pressable>
        </View>

        <View style={styles.bellPaperContainer}>
          <View style={styles.bellPaper}>
            <View style={{position: 'absolute', left: 0, top: 0}}></View>
            <View style={styles.bellimage}>
              <Image
                resizeMode="contain"
                source={require('../../assets/Images/bellPaperIngredient.png')}
                style={styles.bellPaperIcon}
              />
              <View style={{position: 'absolute', top: -20, right: 25}}>
                <TouchableOpacity>
                  <Icon.crossIcon size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{justifyContent: 'center'}}>
              <ResponsiveText>Bell Paper</ResponsiveText>
            </View>
          </View>
          <View style={styles.quantity}>
            <View style={styles.qty}>
              <ResponsiveText>Qty</ResponsiveText>
              <ResponsiveText style={styles.piece}>3 Piece </ResponsiveText>
            </View>
          </View>
        </View>
        <View style={styles.bellPaperContainer}>
          <View style={styles.bellPaper}>
            <View style={styles.bellimage}>
              <Image
                resizeMode="contain"
                source={require('../../assets/Images/TomatoPic.png')}
                style={styles.bellPaperSize}
              />
              <View style={styles.crossicon}>
                <TouchableOpacity>
                  <Icon.crossIcon size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{justifyContent: 'center'}}>
              <ResponsiveText style={{width: 70}}>Tomato</ResponsiveText>
            </View>
          </View>
          <View style={styles.quantity}>
            <View style={styles.qty}>
              <ResponsiveText>Qty</ResponsiveText>
              <ResponsiveText style={styles.piece}>3 Piece </ResponsiveText>
            </View>
          </View>
        </View>

        <View style={styles.button}>
          <View style={styles.backButton}>
            <TouchableOpacity>
              <ResponsiveText style={styles.backText}>Back</ResponsiveText>
            </TouchableOpacity>
          </View>
          <View style={styles.nextButton}>
            <TouchableOpacity
              style={styles.next}
              onPress={() => navigation.navigate('Cooking')}>
              <ResponsiveText style={styles.nextText}>Next</ResponsiveText>
              <Icon.iconrigt size={20} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <IngredientModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Container>
  );
};

export default ChooseIngredients;
