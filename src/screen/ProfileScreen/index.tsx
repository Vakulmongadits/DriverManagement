import React, { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_INFO } from '../../utils/AppConstant';
import Header from '../../component/Header';
let ic_user = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

const ProfileScreen = ({ navigation }:any) => {

  const [userInfo, setUserInfo] = React.useState({
    name:'',
    email:'',
    image: ic_user,
  })

  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = async () => {
    let userDetail : any = await AsyncStorage.getItem(USER_INFO)
    if (userDetail) {
      userDetail = JSON.parse(userDetail)
      setUserInfo({ ...userInfo, ...userDetail })
    }
  }

  const tapOnProfileImage = async () => {
    // let image = await openCamera()
    // setUserInfo({ ...userInfo, image: image?.path })
  }

  return (
    <SafeAreaView style={styles.container}>

      <Header onPressLeftIcon={() => navigation.goBack()} />

      <TouchableOpacity onPress={() => tapOnProfileImage()}>
        <Image style={styles.imageUser} source={{ uri: userInfo.image }} />
      </TouchableOpacity>

      <Text style={styles.textName}>Name: {userInfo.name}</Text>
      <Text style={styles.textEmail}>Email: {userInfo.email}</Text>
    </SafeAreaView>
  )
}

export default ProfileScreen;