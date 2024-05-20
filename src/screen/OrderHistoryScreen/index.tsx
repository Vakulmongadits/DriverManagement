import React from 'react';
import { SafeAreaView, FlatList, } from 'react-native';
import { ORDER_DETAIL_SCREEN, } from '../../utils/ScreenConstant';
import { moderateScale } from '../../utils/Metrics';
import Header from '../../component/Header';
import { ORDER_HISTORY } from '../../utils/StringConstant';
import ItemOrderHistory from './ItemOrderHistory';
import styles from './styles';
let data = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

const OrderHistoryScreen = ({ navigation }:any) => {

    return (
        <SafeAreaView style={styles.container}>
            <Header onPressLeftIcon={() => navigation.goBack()} title={ORDER_HISTORY} />

            <FlatList data={data} extraData={data}
                style={{ margin: moderateScale(16), }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item, index }) => <ItemOrderHistory item={item} index={index}
                    onPress={() => navigation.navigate(ORDER_DETAIL_SCREEN, { item })}
                />} />

        </SafeAreaView>
    )
}

export default OrderHistoryScreen;
