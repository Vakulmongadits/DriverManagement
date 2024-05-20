import HomeScreen from "../HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_INFO } from "../../utils/AppConstant";
import { ENTER_EMAIL, ENTER_PASSWORD, ENTER_VALID_EMAIL, PASSWORD } from '../../utils/StringConstant';
import { validateEmail } from "../../helper";
import { Alert } from "react-native";

export const restApiToLogin = async (email: string, password: string, navigation: any) => {
  if (!validateEmail(email)) {
    return
  } else if (password.trim() == '') {
    Alert.alert(PASSWORD, ENTER_PASSWORD)
    return
  }

  await AsyncStorage.setItem(USER_INFO, JSON.stringify({
    name: 'vakul',
    email
  }))
  navigation.navigate(HomeScreen)
}