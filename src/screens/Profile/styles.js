import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  profileImg: {
    left: wp(3),
    top: hp(5),
    width: wp(40),
    height: wp(40),
  },
  profileContainer: {
    top: hp(10),
    left: wp(5),
  },
  firstName: {
    fontSize: 6,
    fontWeight: 'bold',
  },
  lastName: {
    fontSize: 6,
    color: '#272727',
  },
  description: {
    marginTop: 4,
    marginBottom: 20,
    fontSize: 4,
    color: '#4EAA81',
    alignSelf: 'center'
  },
  description1: {
    width: wp(60),
    fontSize: 3.5,
    color: '#7A8FA6',
    textAlign: 'left',
  },
  label: {
    flexDirection: 'row',
    marginTop: hp(10),
    marginLeft: wp(7),
    marginRight: wp(6),
    height: hp(10),
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  recipe: {
    justifyContent: 'center',
    left: 20,
  },
  viewers: {
    justifyContent: 'center',
  },
  saved: {
    justifyContent: 'center',
    right: 20,
  },
  labelText: {
    fontSize: 4,
    color: '#7A8FA6',
  },
  labelNumber: {
    fontSize: 6,
  },
  imageContainer: {
    flex: 1,
  },
  cardImage: {
    width: wp(100 / 2),
    height: wp(40),
    alignSelf: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 20,
  },
  largeImage: {
    width: wp(60),
    height: wp(100),
  },
  editProfile: {
    width: wp(20),
    backgroundColor: '#4EAA81',
    padding: 5,
    position: 'absolute',
    marginTop: hp(17),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(5),
  },
});

export default styles;
