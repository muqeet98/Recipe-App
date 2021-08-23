import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    padding: 25,
    paddingRight: 25,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  ProgressBar: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activeTab: {
    backgroundColor: '#4EAA81',
    width: wp(25),
    height: 2,
  },
  inactiveTab: {
    backgroundColor: '#D4D4D4',
    width: wp(25),
    height: 2,
  },
  coverContainer: {
    width: wp(85),
    marginTop: hp(3),
    height: hp(20),
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    borderStyle: 'dashed',
    borderColor: '#D4D4D4',
    borderWidth: 1,
  },
  addCover: {
    marginTop: hp(1),
    fontSize: 4,
    color: '#727272',
    alignSelf: 'center',
  },
  uptoMb: {
    marginTop: hp(1),
    fontSize: 2,
    color: '#727272',
    alignSelf: 'center',
  },
  percentageView: {
    height: 3,
    backgroundColor: '#4EAA81',
    borderRadius: 2,
    width: wp(90),
  },
  percentage: {
    fontSize: 2,
    alignSelf: 'flex-end',
    marginTop: 10,
    color: '#4EAA81',
  },
  input: {
    borderWidth: 2,
    borderColor: '#E6E6E6',
    padding: 10,
    borderRadius: 30,
    width: wp(85),
  },
  description: {
    borderWidth: 2,
    borderColor: '#E6E6E6',
    borderRadius: 10,
    height: hp(20),
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    width: wp(85),
    bottom: 10,
  },
  button: {
    flex: 1,
    marginTop: 20,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4EAA81',
    borderRadius: 30,
    width: wp(85),
    marginBottom: 50,
  },
  timePicker: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    width: wp(85),
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#E6E6E6',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    color: '#fff',
    marginLeft: wp(7),
  },
});

export default styles;
