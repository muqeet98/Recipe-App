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
  cardBottom: {
    width: wp(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookmark: {
    width: 50,
    height: 50,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginBottom: 20,
  },
  titleContainer: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  titleContainer2: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  viewAll: {
    textAlignVertical: 'center',
    fontSize: 3.5,
    color: '#707070',
  },
  recipes: {
    textAlignVertical: 'center',
    fontSize: 4,
    color: '#262626',
  },
  horizontalCard: {
    height: hp(10),
    borderWidth: 1,
  },
  card: {
    marginTop: 20,
    bottom: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-evenly',
    padding: 5,
    width: wp(30),
    height: wp(30),
    borderRadius: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  cardImage: {
    height: '50%',
    width: '50%',
  },
  cardTitle: {
    justifyContent: 'center',
    color: '#262626',
  },
  scrollView: {
    width: wp(50),
    height: hp(50),
  },
  slide: {
    marginTop: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: wp(70),
    height: hp(60),
    borderRadius: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  dot: {
    width: 10,
    height: 10,

    backgroundColor: '#727272',
    borderRadius: 20,
  },
  specialRecipeCard: {
    marginTop: 20,
    bottom: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-evenly',
    padding: 5,
    width: wp(70),
    height: wp(70),
    borderRadius: 30,
    marginHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    justifyContent: 'center',
    color: '#262626',
  },
  button: {
    alignItems: 'flex-end',
    right: 10,
  },
  recipeButton: {
    flexDirection: 'row',
    backgroundColor: '#4EAA81',
    padding: 10,
    borderRadius: 30,
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 30,
    alignItems: 'center',
    marginLeft: 5,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default styles;
