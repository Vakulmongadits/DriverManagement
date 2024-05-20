import React, { useState } from 'react'; 
import { Image, SafeAreaView, Text,  } from 'react-native';
import { EMAIL,   FORGOT_PASSWORD, LOGIN, PASSWORD } from '../../utils/StringConstant';
import { FORGOT_PASSWORD_SCREEN, SIGN_UP_SCREEN } from '../../utils/ScreenConstant'; 
import Field from '../../component/Field';
import styles from './styles';
import { moderateScale } from '../../utils/Metrics';
import { restApiToLogin } from './helper';
import { ColorConstant } from '../../utils/ColorConstant';
import ButtonComponent from '../../component/ButtonComponent';

const LoginScreen = ({ navigation }:any) => {
  const [email, setEmail] = React.useState('vakul@gmail.com')
  const [password, setPassword] = React.useState('12312321')
const[isLoading,setIsLoading] = useState(false);

  const tapOnLogin = async () => {
   restApiToLogin(email,password,navigation)
  }

  const tapOnSignUp=()=>{
    navigation.navigate(SIGN_UP_SCREEN)
  }

  return (
    <SafeAreaView style={styles.container}>

        <Image style={styles.imageLogo} />

        <Field title={EMAIL}
            value={email}
            containerStyle={{ marginTop: moderateScale(40) }}
            onChangeText={setEmail} />

        <Field title={PASSWORD}
            value={password}
            containerStyle={{ marginTop: moderateScale(20) }}
            onChangeText={setPassword} />

            <Text style={{alignSelf:'flex-end',marginEnd:moderateScale(16),marginTop:moderateScale(10),color:ColorConstant.BLACK}}
            onPress={()=> navigation.navigate(FORGOT_PASSWORD_SCREEN)}>{FORGOT_PASSWORD}</Text>

        <ButtonComponent containerStyle={styles.touchLogin}  title={LOGIN} isLoading={isLoading}
        onPress={()=> tapOnLogin()}/>

        <Text style={{alignSelf:'center',marginTop:moderateScale(40),color:ColorConstant.BLACK,}}
        onPress={()=> tapOnSignUp()}>Don't have account? Sign Up</Text>
    </SafeAreaView>
)
}

export default LoginScreen;