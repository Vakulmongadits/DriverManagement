import React, { useEffect, useState } from 'react';
import { SafeAreaView, } from 'react-native';
import GetLocation from 'react-native-get-location'
import MapComponent from '../../component/MapComponent';
import BottomView from './BottomView';
import styles from './styles';
import NewJobModal from '../../component/modal/NewJobModal';

const HomeScreen = ({ }) => {
  const [showNewJobModal, setShowNewJobModal] = useState(false)

  const [locationRegion, setLocationRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 200,
    longitudeDelta: 1,
  });

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log('location --> ', location);
        setLocationRegion({ ...locationRegion, ...location })
      })
      .catch(error => {
        const { code, message } = error;
        console.log("getLocation --> ", code, message);
      })
  }
  return (
    <SafeAreaView style={styles.container}>
      <NewJobModal showModal={showNewJobModal}
        hideModal={() => setShowNewJobModal(false)}
        onAccept={() => setShowNewJobModal(false)} />

      <MapComponent locationRegion={locationRegion} />
      <BottomView />
    </SafeAreaView>
  )
}

export default HomeScreen; 