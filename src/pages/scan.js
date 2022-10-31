import React, {Component, Fragment} from 'react';
import {
  TouchableOpacity,
  Text,
  Linking,
  View,
  Image,
  ImageBackground,
  BackHandler,
  Alert,
  StatusBar,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './scanStyle';
// import { QRreader } from "react-native-qr-decode-image-camera";
var ImagePicker = require('react-native-image-picker');

class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scan: true,
      result: null,
    };
  }

  openPhoto() {
    const {navigate} = this.props.navigation;
    ImagePicker.launchImageLibrary({}, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('dibatalkan');
      } else {
        path = response.assets[0].uri;
        QRreader(path).then(data => {
          navigate(`Tanaman${data}`);
        });
      }
    });
  }

  onSuccess = e => {
    const check = e.data.substring(0, 4);
    // const idBarcode = JSON.parse(e.data);
    // console.log(idBarcode.id)
    const {navigate} = this.props.navigation;
    this.setState({
      result: e,
      scan: true,
    });
    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    } else {
      navigate(`Tanaman${e.data}`);
    }
  };

  render() {
    const {scan, result} = this.state;
    return (
      <View style={styles.scrollViewStyle}>
        <StatusBar backgroundColor="#30ccbc" barStyle="light-content" />
        <Fragment>
          {/* <View style={styles.header}>
                        <Text style={styles.textTitle}>Scan QR Code</Text>
                    </View> */}
          {scan && (
            <QRCodeScanner
              reactivate={true}
              showMarker={true}
              ref={node => {
                this.scanner = node;
              }}
              onRead={this.onSuccess}
              topContent={
                <Text style={styles.centerText}>
                  Please move your camera {'\n'} over the QR Code
                </Text>
              }
              bottomContent={
                <TouchableOpacity
                  style={styles.buttonScan}
                  onPress={() => {
                    this.openPhoto();
                  }}>
                  <Text
                    style={{
                      color: '#30ccbc',
                      textAlign: 'center',
                      fontSize: 18,
                      fontFamily: 'Lato-Bold'
                    }}>
                    Gallery
                  </Text>
                </TouchableOpacity>
              }
            />
          )}
        </Fragment>
      </View>
    );
  }
}
export default Scan;
