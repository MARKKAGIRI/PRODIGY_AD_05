import {Camera, CameraView, useCameraPermissions} from "expo-camera" 
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import{useState, useEffect} from 'react'


export default function Home() {
    const [permission, requestPermission] = useCameraPermissions()
    const isPermissionGranted = Boolean(permission?.granted)
    const [data , setData] = useState("SCAN SOMETHING")


    if (!isPermissionGranted) {
      // Camera permissions are not granted yet.
      return (
        <View style={styles.container}>
          <Text style={styles.message}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      );
    }
    return (
        <View style={styles.container}>
        <CameraView
            style={StyleSheet.absoluteFillObject}
            facing="back"
            onBarcodeScanned={(data) =>{
              setData(data.data)
              Linking.openURL(data.data)

            }}
            BarcodeBounds
        />
        <Text style={styles.BtnText}>{data}</Text>
        </View>
    );


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnText:{
    fontSize: 20,
    position: 'static',
    color: 'blue',
    bottom: 180,
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 4
  }
});