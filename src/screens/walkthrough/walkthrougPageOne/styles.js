import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#4EAA81',
    marginLeft: wp(15),
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  imgContainer: {
    width: wp(50),
    height: hp(40),
  },
  imgStyle: {
    width: wp(50),
    height: hp(50),
    right: 60,
    bottom: 20,
  },
  btnContainer: {
    marginTop: hp(25),
    right: wp(11),
  },
  rightArrow: {
    width: wp(25),
    height: wp(25),
  },
  cooking: {
    height: hp(12),
  },
  startCooking: {
    color: '#FFFFFF',
    fontSize: 6,
    marginLeft: wp(5),
  },
  somethingNew: {
    marginTop: 10,
    color: '#FFFFFF',
    fontSize: 4,
    marginLeft: wp(5),
    width: 150,
  },
});

export default styles;
