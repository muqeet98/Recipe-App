import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
  },

  logo: {
    width: wp(25),
    height: hp(15),
    marginTop: 10,
    marginBottom: 40,
  },

  welcome: {
    fontSize: 8,
    color: '#444444',
  },
  foodplant: {
    marginTop: 10,
    color: '#B0B0B0',
    fontSize: 8,
  },
  input: {
    width: wp(78),
    padding: 10,
  },

  logIn: {
    marginTop: hp(10),
    fontSize: 8,
    color: '#4EAA81',
  },
  facebook: {
    width: wp(10),
    height: hp(10),
  },
  signup: {
    fontSize: 4,
    color: '#4EAA81',
  },
  account: {
    color: '#B0B0B0',
  },
  socialButton: {
    justifyContent: 'space-between',
    marginTop: hp(5),
    width: wp(55),
    flexDirection: 'row',
  },
  google: {
    width: wp(10),
    height: hp(10),
  },
  loginWith: {
    color: '#A1A1A1',
    textAlignVertical: 'center',
  },
  signupButton: {
    marginTop: 20,
    flexDirection: 'row',
  },
  email: {
    flexDirection: 'row',
  },
});

export default styles;
