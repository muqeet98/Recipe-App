import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: wp(100),
    backgroundColor:'#4EAA81'
  },
  btnStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: hp(5),
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default styles;
