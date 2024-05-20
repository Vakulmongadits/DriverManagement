import React from 'react';
import { Alert, SafeAreaView, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import SplashScreen from './screen/SplashScreen';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import 'react-native-gesture-handler';
import ProfileScreen from './screen/ProfileScreen';
import { FORGOT_PASSWORD_SCREEN, HOME, HOME_SCREEN, LOGIN_SCREEN, ORDER_DETAIL_SCREEN, ORDER_HISTORY_SCREEN, PROFILE_SCREEN, SIGN_UP_SCREEN, SPLASH_SCREEN } from './utils/ScreenConstant';
import { LOGOUT, LOGOUT_DESCRIPTION, NO, ORDER_HISTORY, YES } from './utils/StringConstant';
import { moderateScale } from './utils/Metrics';
import 'react-native-devsettings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUpScreen from './screen/SignUpScreen';
import ForgotPasswordScreen from './screen/ForgotPassoword';
import OrderHistoryScreen from './screen/OrderHistoryScreen';
import OrderDetailScreen from './screen/OrderDetailScreen';

const sideBarOptions = [
  HOME,
  PROFILE_SCREEN,
  ORDER_HISTORY,
  LOGOUT,
]

const stackScreens = [
  { name: SPLASH_SCREEN, component: SplashScreen, },
  { name: LOGIN_SCREEN, component: LoginScreen, },
  { name: SIGN_UP_SCREEN, component: SignUpScreen, },
  { name: FORGOT_PASSWORD_SCREEN, component: ForgotPasswordScreen, },
  { name: HOME_SCREEN, component: DrawerStack, },
  { name: ORDER_HISTORY_SCREEN, component: OrderHistoryScreen, },
  { name: ORDER_DETAIL_SCREEN, component: OrderDetailScreen, },
  { name: PROFILE_SCREEN, component: ProfileScreen, },
]

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {stackScreens.map((elem) => {
            return <Stack.Screen name={elem.name} component={elem.component} />
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

function DrawerStack() {
  return <Drawer.Navigator initialRouteName={HOME} drawerContent={(props) => <CustomDrawer {...props} />}>
    <Drawer.Screen name="Home" component={HomeScreen} />
  </Drawer.Navigator>
}

const CustomDrawer = (props: any) => {

  return <DrawerContentScrollView>
    {sideBarOptions.map((elem, index) => {
      return <Text key={index} style={{ marginStart: moderateScale(16), marginTop: moderateScale(10), fontSize: moderateScale(16) }}
        onPress={() => tapOnItem(elem, props)}>{elem}</Text>
    })}
  </DrawerContentScrollView>
}

const tapOnItem = (elem: string, props: any) => {

  if (elem == LOGOUT) {
    Alert.alert(LOGOUT, LOGOUT_DESCRIPTION, [{
      text: NO,
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: YES, onPress: async () => {
        await AsyncStorage.clear()
        props.navigation.reset({
          index: 0,
          routes: [{ name: LOGIN_SCREEN }],
        });
      }
    },
    ])
    return
  } else if (elem == ORDER_HISTORY) {
    props.navigation.navigate(ORDER_HISTORY_SCREEN)
    props.navigation.closeDrawer();
    return
  }
  props.navigation.navigate(elem)
  props.navigation.closeDrawer();
}