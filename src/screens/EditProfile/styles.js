import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    //flex: 1,
  },
  image: {
    width: wp(100),
    justifyContent: 'center',
  },
  profileContainer: {
    alignSelf: 'center',
  },
  backIcon: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginTop: 20,
    width: wp(10),
    padding: 5,
    marginLeft: wp(3),
    borderRadius: 30,
  },
  changePhoto: {
    justifyContent: 'center',
    backgroundColor: '#4EAA81',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 20,
    width: wp(30),
    bottom: 12,
  },
  textInput: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: wp(90),
    borderRadius: 30,
    paddingLeft: 15,
    borderColor: '#E6E6E6',
    borderWidth: 2,
  },
  passwordInput: {
    width: wp(80),
    paddingLeft: 15,
  },
  name: {
    marginBottom: 5,
    fontSize: 3.5,
    marginLeft: 20,
  },
  location: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    height: 50,
    borderWidth: 2,
    borderColor: '#E6E6E6',
    marginTop: 10,
    flexDirection: 'row',
  },
  locationInput: {
    backgroundColor: '#FFFFFF',
    width: wp(70),
    padding: 20,
    borderColor: '#E6E6E6',
    bottom: hp(5),
  },
  locationContainer: {
    width: wp(10),
    marginTop: wp(3),
    marginLeft: 5,
  },
  resetPassword: {
    backgroundColor: '#FFFFFF',
    width: wp(90),
    borderRadius: 30,
    flexDirection: 'row',
    height: 50,
    borderWidth: 2,
    borderColor: '#E6E6E6',
    marginBottom: 20,
    marginTop: 10,
  },
  rightIcon: {
    alignSelf: 'flex-end',
    marginTop: hp(1),
    marginLeft: wp(4),
  },

  password: {
    flexDirection: 'row',
    borderRadius: 30,
  },
  rightarrow: {
    width: wp(10),
    marginTop: hp(1.7),
  },
  locationIcon: {
    width: wp(10),
    marginTop: hp(1.8),
    paddingLeft: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderColor: '#E6E6E6',
    borderWidth: 2,
  },
});

export default styles;
