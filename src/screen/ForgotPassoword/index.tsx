import React from 'react';
import { EMAIL, FORGOT_PASSWORD, } from '../../utils/StringConstant';
import { Alert, Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Field from '../../component/Field';
import { moderateScale } from '../../utils/Metrics';
import Header from '../../component/Header';
import styles from './styles';
import { validateEmail } from '../../helper';
import { SUCCESS } from '../../utils/ScreenConstant';

const ForgotPasswordScreen = ({ navigation } :any) => {
    const [email, setEmail] = React.useState('vakul@gmail.com')

    const tapOnSubmit = async () => {

        if (!validateEmail(email)) return

        Alert.alert(SUCCESS,`We shared link on ${email} Please check the email for further process.`,)
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header onPressLeftIcon={() => navigation.goBack()}
                title={FORGOT_PASSWORD} />
            <Image style={styles.imageLogo} />

            <Field title={EMAIL}
                value={email}
                containerStyle={{ marginTop: moderateScale(40) }}
                onChangeText={setEmail} />

            <TouchableOpacity style={styles.touchSubmit} onPress={() => tapOnSubmit()}>
                <Text style={styles.textSubmit}>Submit</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default ForgotPasswordScreen;
