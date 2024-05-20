import { Dimensions,  StyleSheet,   } from 'react-native';
import { moderateScale } from '../../utils/Metrics';
import { ColorConstant } from '../../utils/ColorConstant';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorConstant.WHITE,
    },
    imageLogo: {
        height: moderateScale(80),
        width: moderateScale(80),
        backgroundColor: '#0000FF',
        alignSelf: 'center',
        marginTop: moderateScale(100),
    },
    touchSubmit: {
        height: moderateScale(60),
        width: width - moderateScale(32),
        borderRadius: 10,
        backgroundColor: '#0000FF',
        marginTop: moderateScale(20),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSubmit: {
        fontSize: moderateScale(22),
        color: 'white'
    },

})

export default styles;