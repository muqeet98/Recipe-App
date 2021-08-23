import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {Container, Icon, ResponsiveText} from '../../components';
import styles from './index';

const FoodDetail = ({route}) => {
  // const {item} = route.params;
  // console.log('item', item);

  const DATA = [
    {
      id: '1',
      image: require('../../assets/Images/tomato.png'),
      name: 'Tomato',
      quantity: '1 items',
    },
    {
      id: '1',
      image: require('../../assets/Images/bellPaper.png'),
      name: 'Bell Paper',
      quantity: '200 gr',
    },
    {
      id: '1',
      image: require('../../assets/Images/greens.png'),
      name: 'Greens',
      quantity: '1 items',
    },
    {
      id: '1',
      image: require('../../assets/Images/onion.png'),
      name: 'Red onions',
      quantity: '1/2 items',
    },
  ];

  return (
    <Container>
      <ScrollView>
        <View style={styles.topContainer}>
          <Image
            source={require('../../assets/Images/foodDetal.png')}
            style={styles.foodDetail}
          />
          <View style={styles.leftArrow}>
            <TouchableOpacity style={styles.left}>
              <Icon.leftArrow size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.bookmarkContainer}>
            <TouchableOpacity style={styles.bookmark}>
              <Icon.bookmark size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.label}>
            <View style={styles.stopwatchLabel}>
              <Icon.stopwatchLabel size={25} />
              <ResponsiveText style={styles.textColor}>30 min</ResponsiveText>
            </View>
            <View style={styles.flame}>
              <Icon.flame size={25} />
              <ResponsiveText style={styles.textColor}>235 kall</ResponsiveText>
            </View>
            <View style={styles.flame}>
              <Icon.circle size={25} />
              <ResponsiveText style={styles.textColor}>5 serve</ResponsiveText>
            </View>
          </View>
          <View style={styles.saladContainer}>
            <ResponsiveText style={styles.salad}>Greek Salad</ResponsiveText>
            <ResponsiveText style={styles.ingredients}>
              6 ingredients
            </ResponsiveText>
          </View>

          <View style={styles.listView}>
            <ResponsiveText style={styles.ingredient}>
              Ingredients
            </ResponsiveText>
            <FlatList
              contentContainerStyle={{paddingHorizontal: 20}}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATA}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.imgContainer}>
                  <Image source={item.image} style={styles.list} />
                  <ResponsiveText>{item.name}</ResponsiveText>
                  <ResponsiveText style={styles.quantity}>
                    {item.quantity}
                  </ResponsiveText>
                </View>
              )}
            />
          </View>
          <View style={styles.instructions}>
            <ResponsiveText>Cooking Instruction</ResponsiveText>
            <View style={styles.textContainer}>
              <ResponsiveText style={{color: '#4EAA81'}}>Step 1</ResponsiveText>
              <ResponsiveText style={{fontSize: 4, textAlign: 'left'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </ResponsiveText>
              <ResponsiveText style={{color: '#4EAA81'}}>Step 2</ResponsiveText>
              <ResponsiveText style={{fontSize: 4, textAlign: 'left'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </ResponsiveText>
            </View>
          </View>
          <View style={{height: 100}}></View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 10,
        }}>
        <View style={styles.videobtn}>
          <TouchableOpacity>
            <Icon.playIcon size={25} color={'white'} />
          </TouchableOpacity>

          <ResponsiveText
            style={{
              color: '#FFFFFF',
              marginLeft: 10,
              fontSize: 4,
              marginTop: 3,
            }}>
            Video
          </ResponsiveText>
        </View>
      </View>
    </Container>
  );
};

export default FoodDetail;
