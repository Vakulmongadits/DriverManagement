import React from 'react';
import { SafeAreaView, StyleSheet, Image,  Dimensions, Text } from 'react-native';
import { USER_INFO } from '../../utils/AppConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HOME_SCREEN, LOGIN_SCREEN } from '../../utils/ScreenConstant';
import { moderateScale } from '../../utils/Metrics';
import Header from '../../component/Header';
import { ORDER_HISTORY } from '../../utils/StringConstant';
import { ColorConstant } from '../../utils/ColorConstant';
// import styles from './styles';
const { width } = Dimensions.get('window');
let vendorName = "Ditstek Innovations Pvt. Ltd";
let address ="D140, Phase 7, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 140308";

const OrderDetailScreen = ({ navigation, route }:any) => {

    return (
        <SafeAreaView style={styles.container}>
            <Header onPressLeftIcon={() => navigation.goBack()} title={ORDER_HISTORY} />

            <Image style={styles.imageOrder} />

            <Text style={styles.textOrderTitle}>Title: Order Title</Text>
            <Text style={styles.textOrderTitle}>Vendor name: {vendorName}</Text>
            <Text style={styles.textOrderTitle}>Vendor address: {address}</Text>
        </SafeAreaView>
    )
}

export default OrderDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorConstant.WHITE
    },
    imageOrder: {
        height: moderateScale(180),
        width: width - moderateScale(32),
        alignSelf: 'center',
        backgroundColor: 'red',
        borderRadius: 10
    },
    textOrderTitle: {
        fontSize: moderateScale(16),
        color: ColorConstant.BLACK,
        paddingStart: moderateScale(16),
        marginTop: moderateScale(5)
    },
},
)