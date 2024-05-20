import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { moderateScale } from "../../utils/Metrics";
const { width } = Dimensions.get('window');
interface Props  {
title? : string,
value? : string,
onChangeText? : any,
containerStyle? : any,
}
const Field = ({ title, value, onChangeText, containerStyle }: Props) => {
    return (
        <View style={containerStyle}>
            <Text style={styles.textTitle}>{title}</Text>
            <TextInput style={styles.textInputField} value={value}
                onChangeText={onChangeText} />
        </View>
    )
}

export default Field;

const styles = StyleSheet.create({
    textTitle: {
        marginStart: moderateScale(16),
    },
    textInputField: {
        height: moderateScale(60),
        paddingStart: moderateScale(16),
        paddingEnd: moderateScale(16),
        width: width - 20,
        borderRadius: moderateScale(10),
        borderWidth: .5, 
        borderColor: 'grey',
        alignSelf: 'center',
        marginTop: 10,
    },
})