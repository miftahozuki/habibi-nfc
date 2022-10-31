import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import nfc from '../assets/icon_nfc.png';

export default class QRmaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'ex',
      log: 'ex',
      text: '',
      popup: false,
    };
  }

  componentDidMount() {
    NfcManager.start();
  }

  componentWillUnmount() {
    this._cleanUp();
  }

  _cleanUp = () => {
    NfcManager.cancelTechnologyRequest().catch(() => 0);
  };

  readData = async () => {
    try {
      let tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;
      let resp = await NfcManager.requestTechnology(tech, {
        alertMessage: 'Ready to do some custom Mifare cmd!',
      });

      let cmd =
        Platform.OS === 'ios'
          ? NfcManager.sendMifareCommandIOS
          : NfcManager.transceive;

      resp = await cmd([0x3a, 4, 4]);
      let payloadLength = parseInt(resp.toString().split(',')[1]);
      let payloadPages = Math.ceil(payloadLength / 4);
      let startPage = 5;
      let endPage = startPage + payloadPages - 1;

      resp = await cmd([0x3a, startPage, endPage]);
      bytes = resp.toString().split(',');
      let text = '';

      for (let i = 0; i < bytes.length; i++) {
        if (i < 5) {
          continue;
        }

        if (parseInt(bytes[i]) === 254) {
          break;
        }

        text = text + String.fromCharCode(parseInt(bytes[i]));
      }

      this.setState({
        log: text,
      });

      this.setState({
        value: `${text}`,
        popup: false,
      });

      this._cleanUp();
    } catch (ex) {
      this.setState({
        log: ex.toString(),
      });
      this._cleanUp();
    }
  };

  getTap = () => {
    this.readData();
    this.setState({
      popup: true,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <QRCode value={this.state.value} size={200} />
        </View>
        <View style={{paddingTop: 40}}>
          <TouchableOpacity
            style={styles.buttonRead}
            onPress={() => this.getTap()}>
            <Text style={{color: 'white'}}>Generate</Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={this.state.popup}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 7,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{
                  backgroundColor: 'white',
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  borderColor: 'white',
                  borderWidth: 4,
                  position: 'absolute',
                  zIndex: 1,
                }}
                source={nfc}
              />
            </View>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
                marginTop: 60,
              }}>
              Ready to scan..
            </Text>
            <Text style={{color: 'black', textAlign: 'center'}}>
              Please tap your NFC compatible TAG properly on the back of your
              device.
            </Text>
            <TouchableOpacity
              onPress={() => this.setState({popup: false})}
              style={{
                justifyContent: 'center',
                backgroundColor: '#30ccbc',
                alignItems: 'center',
                paddingVertical: 10,
                marginTop: 10,
                borderRadius: 50,
                elevation: 8,
              }}>
              <Text style={{color: 'white'}}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonRead: {
    marginLeft: 70,
    marginRight: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#30ccbc',
  },
});
