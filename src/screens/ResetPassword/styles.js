import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    width: wp(100),
    height: hp(50),
    justifyContent: 'center',
  },
  profileContainer: {
    alignSelf: 'center',
    height: hp(30),
  },
  backIcon: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: wp(10),
    height: wp(10),
    marginLeft: wp(3),
    borderRadius: 30,
  },
  changePhoto: {
    backgroundColor: '#4EAA81',
    padding: 10,
    borderRadius: 20,
    position: 'absolute',
    marginTop: hp(18),
  },
  textInput: {
    paddingHorizontal: 20,
    marginTop: hp(10),
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: wp(90),
    borderRadius: 30,
    padding: 10,
    borderWidth: 2,
    borderColor: '#E6E6E6',
    bottom: 25,
  },
  name: {
    marginLeft: wp(5),
    color: '#000000',
    fontSize: 4,
  },
});

export default styles;
