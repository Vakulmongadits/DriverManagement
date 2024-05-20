import { Alert, Linking, Platform } from "react-native";
import { ENTER_EMAIL, ENTER_VALID_EMAIL } from "../utils/StringConstant";
import RNFetchBlob from "rn-fetch-blob";
import { FILE_DOWNLOADED, PHONE_NUMBER_NOT_AVAILABLE, SUCCESS } from "../utils/ScreenConstant";

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const passReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

export const validateEmail = (email: string) => {
  if (email.trim() == '') {
    Alert.alert(ENTER_EMAIL)
    return false
  } else if (!regex.test(email)) {
    Alert.alert(ENTER_VALID_EMAIL)
    return false;
  }
  return true
}

export const openDialer = (phone: string) => {
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  }
  else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert(PHONE_NUMBER_NOT_AVAILABLE);
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
};

export const downloadFile = (item: any) => {

  const { dirs } = RNFetchBlob.fs;

  let fileName = item?.split('/');
  let docName = fileName[fileName?.length - 1];

  let options = {
    fileCache: true,
    useDownloadManager: true,
    notification: true,
    path: `${dirs.DocumentDir}/` + docName,
    description: 'File Download',
  };

  return new Promise((resolve, reject) => {
    RNFetchBlob.config(options)
      .fetch('GET', item)
      .progress({ interval: 250 }, (received, total) => {
        console.log('progress', received / total);
      })
      .then(res => {
        Alert.alert(SUCCESS,FILE_DOWNLOADED );
        resolve(res);
      }).catch((err) => {
        Alert.alert("Error", err);
        reject();
      });

  })
}