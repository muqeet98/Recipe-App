import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listView: {
    height: hp(20),
    marginHorizontal: wp(5),
    backgroundColor: '#FFF',
    backgroundColor: 'white',
    elevation: 2,
  },
  listImage: {
    height: hp(20),
    width: wp(35),
    overflow: 'hidden',
  },
  listContainer: {
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
  },
  listText: {
    top: hp(4),
    left: wp(4),
  },
  greekSalad: {
    color: '#4EAA81',
    fontSize: 4,
  },
  seafoodView: {
    top: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#F1F1F1',
    height: hp(5),
    justifyContent: 'center',
  },
  seafood: {
    color: '#B2B2B2',
    alignSelf: 'center',
  },
  timeView: {
    flexDirection: 'row',
    top: 5,
  },
  minutes: {color: '#727272', left: 5},
  button: {
    marginHorizontal: 5,
  },
  horizontalList: {
    //height: hp(15),
    //paddingLeft: wp(5),
    marginBottom: hp(5),
  },
  mainListView: {
    elevation: 3,
    width: '90%',
    alignSelf: 'center',
    height: hp(20),
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
  },
  favoriteIcon: {
    width: wp(10),
    height: wp(10),
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    right: wp(-15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  foodName: {
    flexDirection: 'row',
  },
  filterContainer: {
    width: wp(45),
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
    padding: 14,
    borderRadius: 30,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  newToOld: {
    width: wp(45),
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
    padding: 14,
    borderRadius: 30,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginLeft: 10,
  },
  deleteContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 2,
    marginRight: 2,
  },
});

export default styles;
