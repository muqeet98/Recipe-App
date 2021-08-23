import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 20,
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  progressBar: {
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
  ingredients: {
    fontSize: 5,
    marginTop: hp(4),
    marginBottom: hp(1),
    color: '#727272',
  },
  text: {
    color: '#727272',
  },
  ingredienContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E6E6E6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
  IconColor: {
    backgroundColor: '#F9F9F9',
    width: wp(10),
    height: wp(10),
    borderRadius: 10,
    justifyContent: 'center',
  },
  bellPaperContainer: {
    marginTop: hp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bellPaper: {
    flexDirection: 'row',
    height: hp(10),
    width: wp(40),
    justifyContent: 'space-around',
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
  },
  bellPaperSize: {
    padding: 3,
    alignSelf: 'center',
    width: 40,
    //textAlignVertical: 'top',
  },
  bellPaperIcon: {
    padding: 3,
    alignSelf: 'center',
    width: 25,
  },
  bellimage: {
    backgroundColor: '#FFFFFF',
    marginTop: hp(2),
    justifyContent: 'center',
    height: wp(10),
    width: wp(10),
    borderRadius: 10,
  },
  quantity: {
    flexDirection: 'row',
    height: hp(10),
    width: wp(40),
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
  },
  qty: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 15,
    alignSelf: 'center',
    width: wp(35),
    marginLeft: wp(2.5),
    borderRadius: 10,
    flexDirection: 'row',
  },
  piece: {
    color: '#4EAA81',
    marginLeft: wp(5),
  },
  button: {
    marginTop: hp(30),
    alignContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 10,
  },
  backButton: {
    backgroundColor: '#F2F2F2',
    width: wp(40),
    padding: 14,
    borderRadius: 30,
  },
  nextButton: {
    backgroundColor: '#4EAA81',
    width: wp(40),
    padding: 14,
    borderRadius: 30,
  },
  backText: {
    alignSelf: 'center',
    color: '#727272',
  },
  nextText: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  crossicon: {
    position: 'absolute',
    top: -20,
    right: 25,
  },
  next: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
