import React from 'react';
import {Image, View} from 'react-native';
import {Container, Icon} from '../../components';
import AppHeader from '../../components/AppHeader';
import MasonryList from 'react-native-masonry-list';

const Search = ({navigation}) => {
  const data = [
    {
      uri: 'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
    },

    {
      uri: 'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
    },
    {
      uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
    },
    {
      uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
    },
    {
      uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
    },
    {
      uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
    },
  ];
  return (
    <Container>
      <AppHeader
        navigation={navigation}
        name={'Popular '}
        Icon={<Icon.down_Arrow size={20} />}
        Image={
          <Image
            resizeMode="cover"
            source={require('../../assets/Images/profile.png')}
          />
        }
      />

      <MasonryList
        imageContainerStyle={{borderRadius: 10}}
        columns={2}
        images={data}
        spacing={5}
        onPressImage={item =>
          navigation.navigate('FoodDetail', {
            item: item.uri,
          })
        }
      />
    </Container>
  );
};

export default Search;
