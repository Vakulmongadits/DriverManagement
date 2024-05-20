import React  from 'react';
import {  Image, TouchableOpacity, Text, Dimensions, View } from 'react-native'; 
import { moderateScale } from '../../utils/Metrics'; 
import { ColorConstant } from '../../utils/ColorConstant';
const { width } = Dimensions.get('window');

const ItemOrderHistory = ({ item, index, onPress }:any) => {
    return <TouchableOpacity style={{ height: moderateScale(80), width: width - moderateScale(32), alignSelf: 'center', borderRadius: moderateScale(10), borderWidth: .5, borderColor: 'grey', alignItems: 'center', marginTop: moderateScale(10), flexDirection: 'row' }} key={index}
    onPress={()=> onPress()}>
        <Image style={{ height: moderateScale(40), width: moderateScale(40), backgroundColor: 'red', marginStart: moderateScale(16) }} />
        <Text style={{ marginStart: moderateScale(10),flex:1, }}>Order Item {index +1}</Text>
       <View style={{padding :moderateScale(5) ,backgroundColor:'green',marginEnd:moderateScale(16),borderRadius:moderateScale(10)}}>
       <Text style={{fontSize:moderateScale(12),color:ColorConstant.WHITE,}}>Completed</Text>
       </View>
    </TouchableOpacity> 
}

export default ItemOrderHistory;