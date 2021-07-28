import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Component } from 'react';

export default class ScanScreen extends React.Component{

constructor(){

super()

this.state = {

hasCamPermissions : null,
scanned : false, 
scannedData : '',
buttonState : normal

}
getCameraPermission = async (id) => {

    const { status } = await Permissions.askAsync(Permissions.CAMERA)

    this.setState({

        hasCamPermission: status === "granted",
        buttonState: id,
        scanned: false

    })

}
handledBarcodeScanned = async ({ type, data }) => {

    const { buttonState } = this.state


    if (buttonState === "clicked") {

        this.setState({

            scanned: true,
            scannedData: data,
            buttonState: 'normal'

        })
    

    }
    
    }

}

render(){

return(
    <View>

    <View>
    <Image
          style={{ width: 150, height: 150, marginTop: 5, alignSelf: 'center' }}
          source={
            require("../assets/Barcodeimage.jpg")
          }
        />
        </View>
    <View>
    <TouchableOpacity
    style={{
        backgroundColor: '#66BB6A',
        width: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
    }}

    onPress={() => { this.getCameraPermission() }}
    

>
    <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 10 }}>Scan QR code</Text>

</TouchableOpacity>
</View>
</View>

)
    



}


}
const styles = StyleSheet.create({

    button: {

        backgroundColor: 'blue',
        margin: 10,
        padding: 10

    }

})


