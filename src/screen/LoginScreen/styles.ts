import { StyleSheet, Dimensions, } from 'react-native';
import { moderateScale } from '../../utils/Metrics';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageLogo: {
    height: moderateScale(80),
    width: moderateScale(80),
    backgroundColor: '#0000FF',
    alignSelf: 'center',
    marginTop: moderateScale(100),
  },
  touchLogin: {
    height: moderateScale(60),
    width: width - 32, borderRadius: 10,
    backgroundColor: '#0000FF', marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLogin: {
    fontSize: moderateScale(22),
    color: 'white'
  },

})

export default styles;