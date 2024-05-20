import React from "react";
import { TouchableOpacity, Image, Text,ActivityIndicator } from 'react-native';
import { moderateScale } from "../../utils/Metrics";
import { ColorConstant } from "../../utils/ColorConstant";

interface Props {
    image?: any,
    title?: string,
    containerStyle?: any,
    onPress?: any,
    isLoading?: boolean,
}

const ButtonComponent = ({ image, title, containerStyle, onPress,isLoading }: Props) => {
    return (
        <TouchableOpacity style={[{ justifyContent: 'center', alignItems: 'center', borderRadius: 10 }, containerStyle]} onPress={onPress}>
           {isLoading ? < ActivityIndicator style={{position:'absolute',zIndex:999,}} color={ColorConstant.WHITE}/>:
            <>
            {image && <Image style={{ height: moderateScale(22), width: moderateScale(22), }} source={image} />}
            {title && <Text style={{ fontSize: moderateScale(18), color: ColorConstant.WHITE }}>{title}</Text>}
            </>
            }
        </TouchableOpacity>
    )
}

export default ButtonComponent;