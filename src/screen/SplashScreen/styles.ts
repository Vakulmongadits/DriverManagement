import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale } from "../../utils/Metrics";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageLogo: {
        height: moderateScale(80),
        width: moderateScale(80),
        backgroundColor: '#0000FF'
    },
});

export default styles;