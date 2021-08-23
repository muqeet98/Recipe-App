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
  mainTitle: {
    fontSize: 5,
    marginTop: hp(4),
    marginBottom: hp(1),
    color: '#727272',
  },
  addSteps: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E6E6E6',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },

  IconColor: {
    backgroundColor: '#4EAA81',
    width: wp(10),
    height: wp(10),
    borderRadius: 10,
    justifyContent: 'center',
  },
  foodContainer: {
    flexDirection: 'row',
    top: -10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: wp(75),
    marginLeft: wp(1),
    textAlignVertical: 'top',
    height: hp(20),
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    paddingLeft: wp(5),
  },
  qty: {
    marginTop: hp(5),
    backgroundColor: '#727272',
    justifyContent: 'center',
    width: wp(10),
    height: wp(10),
    borderRadius: 30,
  },
  qtyText: {
    alignSelf: 'center',
    color: '#fff',
  },
  cameraContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    width: wp(75),
    backgroundColor: '#F4F5F7',
    height: hp(10),
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  videoContainer: {
    marginTop: hp(6),
    height: hp(10),
  },
  description: {
    color: '#727272',
    fontSize: 3,
  },
  videoUpload: {
    backgroundColor: '#F4F5F7',
    justifyContent: 'center',
    height: wp(25),
    width: wp(25),
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#727272',
  },
  videoTouchable: {
    //width: wp(8),
    alignSelf: 'center',
  },
  videoText: {
    fontSize: 2.5,
    alignSelf: 'center',
    color: '#727272',
    marginTop: 5,
  },
  publishContainer: {
    marginTop: hp(10),
    backgroundColor: 'red',
  },
  button: {
    marginTop: hp(10),
    padding: 14,
    flexDirection: 'row',
    backgroundColor: '#4EAA81',
    borderRadius: 30,
    width: wp(85),
    marginBottom: 50,
  },
  publishTxt: {
    color: '#fff',
    textAlignVertical: 'center',
    marginLeft: wp(6),
  },
});

export default styles;
