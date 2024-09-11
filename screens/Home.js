import { Link } from "@react-navigation/native";
import {CameraView, CameraType, useCameraPermissions} from "expo-camera" 
import { Linking, Pressable, StyleSheet, Text, View, Button } from 'react-native';


export default function Home({navigation}) {
    const [permission, requestPermission] = useCameraPermissions()
    const isPermissionGranted = Boolean(permission?.granted)

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
        />
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
    color: 'blue'
  }
});