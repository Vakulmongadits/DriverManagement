import { Dimensions, StyleSheet } from "react-native";
import { moderateScale } from "../../utils/Metrics";
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    imageLogo: {
        height: moderateScale(80),
        width: moderateScale(80),
        backgroundColor: '#0000FF',
        alignSelf: 'center',
        marginTop: moderateScale(60),
    },
    touchSignUp: {
        height: moderateScale(60),
        width: width - 32,
        borderRadius: 10,
        backgroundColor: '#0000FF',
        marginTop: moderateScale(20),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSignUp: {
        fontSize: moderateScale(22),
        color: 'white'
    },
});

export default styles;