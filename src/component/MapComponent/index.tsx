import React, { useEffect, useRef } from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
let googleMapKey = "AIzaSyDlmR1DAVjeCoxIsbCbMBQJoKab2sjaDuQ";
const { width, height } = Dimensions.get('window');

let destinations = [
    { latitude: '30.71726860', longitude: '76.70074440' },
    // { latitude: '30.6882', longitude: '76.7062', }
]

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapComponent = ({ locationRegion }:any ) => {

    const mapRef = useRef(null);
     useEffect(() => {
        mapRef?.current.animateToRegion({
            latitude: locationRegion.latitude,
            longitude: locationRegion.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        });
    }, [locationRegion])
    
    return (
        <MapView
            provider={'google'}
            style={styles.map}
            ref={mapRef}
            // tracksViewChanges={true}
            initialRegion={locationRegion}
            showsUserLocation={true}
            showsMyLocationButton={true}
            followsUserLocation={true}
            showsCompass={true}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
        >

            {destinations.map((elem) => {
                return <>
                    <Marker  
                        coordinate={{
                            latitude: parseFloat(elem?.latitude),
                            longitude: parseFloat(elem?.longitude),
                        }}
                        title={'marker.title'}
                        description={'marker.description'}
                    />

                    <MapViewDirections
                        origin={{
                            latitude: locationRegion.latitude,
                            longitude: locationRegion.longitude,
                        }}
                        mode='DRIVING'
                        destination={{
                            latitude: elem?.latitude,
                            longitude: elem?.longitude,
                        }}
                        strokeWidth={5}
                        strokeColor={'blue'}
                        apikey={googleMapKey}
                    />
                </>
            })}
        </MapView>
    )
}

export default MapComponent;

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
})

