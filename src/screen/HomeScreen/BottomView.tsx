
import React from 'react';
import { Image, StyleSheet, Text, View, } from 'react-native';
import { moderateScale } from '../../utils/Metrics';
import ButtonComponent from '../../component/ButtonComponent';
import { openDialer } from '../../helper';

let ic_user = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
let ic_message = "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_message_48px-512.png"
let ic_phone = "https://cdn-icons-png.flaticon.com/512/597/597177.png";
let phoneNumber = '9988817861';

const BottomView = () => {
  return (
    <View style={styles.container}>
      <Image style={{ height: moderateScale(80), width: moderateScale(80), marginStart: 10, }} source={{ uri: ic_user }} />
      <View style={{ flex: 1, height: '100%', marginStart: moderateScale(10) }}>
        <Text style={{ marginTop: moderateScale(20) }}>Driver Name: <Text style={{ fontWeight: 'bold' }}>Vakul</Text></Text>
        <Text style={{ marginTop: moderateScale(6) }}>ETA: <Text style={{ fontWeight: 'bold' }}>10 minutes</Text></Text>

        <View style={{ alignSelf: 'flex-end', flexDirection: 'row', flex: 1, }}>
          <ButtonComponent image={{ uri: ic_message }} onPress={() =>openDialer(phoneNumber)} />
          <ButtonComponent image={{ uri: ic_phone }} containerStyle={{ marginStart: moderateScale(20), marginEnd: moderateScale(16) }}
            onPress={() => openDialer(phoneNumber)} />
        </View>
      </View>
    </View>
  )
}

export default BottomView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: moderateScale(100),
    width: moderateScale(300),
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    borderColor: 'grey',
    borderWidth: .5,
    alignSelf: 'center',
    position: 'absolute',
    bottom: moderateScale(60),
    backgroundColor: 'white',
    alignItems: 'center'
  }
})