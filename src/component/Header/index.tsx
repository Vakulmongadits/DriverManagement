import React from "react";
import { Image, Text, TouchableOpacity, View,Dimensions } from "react-native";
import { moderateScale } from "../../utils/Metrics";
const { width } = Dimensions.get('window');
interface Props {
onPressLeftIcon? :any,
title? :string,
}
const Header =({onPressLeftIcon,title} :Props)=>{
    return(
        <View style={{height:moderateScale(50),width,flexDirection:'row',alignItems:'center'}}>
         
        <TouchableOpacity style={{height:'100%',width:moderateScale(50),backgroundColor:'white',justifyContent:'center',paddingStart:16,}}
        onPress={()=> onPressLeftIcon && onPressLeftIcon()}>
            <Image style={{height:moderateScale(24),width:moderateScale(24)}} 
            source={{uri:'https://cdn-icons-png.flaticon.com/512/3114/3114883.png'}} />
        </TouchableOpacity>

        <Text style={{fontSize:moderateScale(22),color:'black',flex:1,textAlign:'center'}}>{title}</Text>
         
         <View style={{height:'100%',width:moderateScale(50)}} />
        </View>
    )
}

export default Header;