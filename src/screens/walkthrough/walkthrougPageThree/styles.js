import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#4EAA81',
  },
  topImages: {
    //marginTop: hp(2),
    alignSelf: 'center',
  },
  getStart: {
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  startCooking: {
    // marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cooking: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 6,
  },
  description: {
    width: 200,
    //marginTop: hp(2),
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 4,
    textAlign: 'center',
  },
  logo3: {
    width: hp(100),
    height: hp(70),
  },
});

export default styles;
