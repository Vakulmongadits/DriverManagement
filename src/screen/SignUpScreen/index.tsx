import React, { useState } from "react";
import { Image, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Header from "../../component/Header";
import { ColorConstant } from "../../utils/ColorConstant";
import Field from "../../component/Field";
import { moderateScale } from "../../utils/Metrics";
import { SIGN_UP_SCREEN } from "../../utils/ScreenConstant";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { EMAIL, NAME, PASSWORD, SIGN_UP } from "../../utils/StringConstant";
import styles from "./styles";

const SignUpScreen = ({ navigation }: any) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const tapOnSignUp = () => {

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: ColorConstant.WHITE }}>

            <Header onPressLeftIcon={() => navigation.goBack()}
                title={SIGN_UP_SCREEN} />

            <KeyboardAwareScrollView style={{ flex: 1, }}>

                <Image style={styles.imageLogo} />

                <Field title={NAME}
                    value={formData.name}
                    containerStyle={{ marginTop: moderateScale(20) }}
                    onChangeText={(name: string) => setFormData({ ...formData, name })} />

                <Field title={EMAIL}
                    value={formData.email}
                    containerStyle={{ marginTop: moderateScale(10) }}
                    onChangeText={(email: string) => setFormData({ ...formData, email })} />

                <Field title={PASSWORD}
                    value={formData.password}
                    containerStyle={{ marginTop: moderateScale(10) }}
                    onChangeText={(password: string) => setFormData({ ...formData, password })} />

                <TouchableOpacity style={styles.touchSignUp} onPress={() => tapOnSignUp()}>
                    <Text style={styles.textSignUp}>{SIGN_UP}</Text>
                </TouchableOpacity>

            </KeyboardAwareScrollView>

        </SafeAreaView>
    )
}

export default SignUpScreen;