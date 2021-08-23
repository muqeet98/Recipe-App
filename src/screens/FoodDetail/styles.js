import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    width: wp(100),
    height: hp(40),
  },
  bottomContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
  },
  foodDetail: {
    width: '100%',
    height: hp(50),
    resizeMode: 'cover',
  },
  leftArrow: {
    backgroundColor: '#707070',
    width: wp(15),
    height: wp(15),
    position: 'absolute',
    borderRadius: 30,
    marginTop: hp(6),
    marginLeft: wp(5),
    justifyContent: 'center',
  },
  bookmarkContainer: {
    backgroundColor: '#707070',
    width: wp(15),
    height: wp(15),
    position: 'absolute',
    borderRadius: 60,
    marginTop: hp(6),
    right: 20,
    justifyContent: 'center',
  },
  left: {
    alignSelf: 'center',
  },
  bookmark: {
    alignSelf: 'center',
  },
  label: {
    marginTop: -wp(10),
    flexDirection: 'row',
    width: wp(90),
    alignSelf: 'center',
    padding: 30,
    borderRadius: 20,
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: 'white',
  },
  stopwatchLabel: {
    flexDirection: 'row',
    left: 20,
    //marginLeft: wp(5),
    width: wp(30),
  },
  flame: {
    width: wp(30),
    flexDirection: 'row',
  },
  saladContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textColor: {
    color: '#727272',
    marginLeft: 5,
    marginTop: 4,
  },
  salad: {
    fontSize: 6,
  },
  ingredients: {
    fontSize: 4,
    alignSelf: 'center',
    color: '#4EAA81',
  },
  list: {
    width: wp(25),
    height: wp(25),
  },
  listView: {
    marginTop: 30,
  },
  ingredient: {
    fontSize: 5,
    paddingLeft: 30,
    marginBottom: 10,
  },
  imgContainer: {
    marginHorizontal: 10,
  },
  quantity: {
    color: '#727272',
    fontSize: 4,
  },
  instructions: {
    paddingHorizontal: 30,
    marginTop: 15,
  },
  textContainer: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F1F5EE',
  },
  step1: {
    padding: 20,
  },
  videobtn: {
    borderRadius: 40,
    backgroundColor: '#4EAA81',
    width: wp(30),
    padding: hp(2),
    flexDirection: 'row',
  },
});

export default styles;
