import React, { useEffect } from 'react';
import { SafeAreaView, Image } from 'react-native';
import { USER_INFO } from '../../utils/AppConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HOME_SCREEN, LOGIN_SCREEN } from '../../utils/ScreenConstant';
import styles from './styles';

const SplashScreen = ({ navigation }: any) => {

    useEffect(() => {
        setTimeout(async () => {
            let userDetail = await AsyncStorage.getItem(USER_INFO)
            clearStackAndNavigate(userDetail ? HOME_SCREEN : LOGIN_SCREEN)
        }, 2000)
    }, [])

    const clearStackAndNavigate = (name: string) => {
        navigation.reset({
            index: 0,
            routes: [{ name }],
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.imageLogo} />
        </SafeAreaView>
    )
}

export default SplashScreen;