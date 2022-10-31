import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import Modal from 'react-native-modal';
import main_nfc from '../assets/main_nfc.png';
import nfc from '../assets/icon_nfc.png';
import qrGen from '../assets/qr_gen.png';
import logo1 from '../assets/logo1.png';
import SplashScreen from 'react-native-splash-screen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      log: null,
      text: '',
    };
  }
  componentDidMount() {
    NfcManager.start();
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
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
      const {navigate} = this.props.navigation;
      navigate(`Tanaman${text}`);
      this.setState({
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

  functionCombined() {
    this.setState({popup: true});
    this.readData();
  }

  // getScreen = () => {
  //     console.log(this.state.log)
  //     const { navigate } = this.props.navigation;
  //     navigate(`Tanaman${this.state.log}`)

  // if (this.state.log === '01') {
  //     navigate('Tanaman1')
  // }  else if (this.state.log  === '02') {
  //     navigate('Tanaman2')
  // }  else if (this.state.log  === '03') {
  //     navigate('Tanaman3')
  // }  else if (this.state.log  === '04') {
  //     navigate('Tanaman4')
  // }  else if (this.state.log  === '05') {
  //     navigate('Tanaman05')
  // }else {return <Text>Beranda</Text>};
  // this.setState({
  //     log: '',
  //     popup: false
  // })
  // }

  getScan = () => {
    const {navigate} = this.props.navigation;
    navigate('Scan');
    this.setState({
      log: '',
      popup: false,
    });
  };

  getQrGen = () => {
    const {navigate} = this.props.navigation;
    navigate('QrGen');
  };

  render() {
    // {this.getScreen()}
    return (
      <InternetConnectionAlert>
        <View style={styles.container}>
          <StatusBar backgroundColor="#20BCAC" barStyle="light-content" />
          <View
            style={{
              backgroundColor: '#30ccbc',
              justifyContent: 'center',
              alignItems: 'center',
              height: 55,
            }}>
            <Image
              source={logo1}
              style={{resizeMode: 'contain', aspectRatio: 0.9}}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={main_nfc}
              style={{resizeMode: 'contain', aspectRatio: 1}}
            />
          </View>
          <View style={styles.padding}>
            <TouchableOpacity
              onPress={() => this.functionCombined()}
              // onPress={() =>navigate('Tanaman6')}
              style={styles.buttonRead}>
              <Text style={styles.buttonText}> NFC Card</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.padding}>
            <TouchableOpacity
              onPress={() => this.getScan()}
              style={styles.buttonRead}>
              <Text style={styles.buttonText}> QR Code</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.QrGen}>
            <TouchableOpacity
              style={styles.buttonQr}
              onPress={() => this.getQrGen()}>
              <Image source={qrGen} style={{width: 30, height: 30}} />
            </TouchableOpacity>
          </View>
          {/* 
                <View style={styles.log}>
                    <Text style={{ color: 'black' }}>{this.state.log}</Text>
                </View> */}

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

              {/* <TouchableOpacity onPress={() => this.setState({popup: false})} style={{  justifyContent: 'center', backgroundColor: '#30ccbc', alignItems: 'center', paddingVertical: 10, marginTop: 10, borderRadius: 50, elevation: 8 }}><Text style={{}}>Selesai</Text></TouchableOpacity>    */}
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
                <Text style={{color: 'white'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </InternetConnectionAlert>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // paddingTop: 50,
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    height: 50,
    textAlign: 'center',
    color: 'black',
  },
  buttonWrite: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#9D2235',
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
  buttonQr: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#30ccbc',
  },
  buttonText: {
    color: '#ffffff',
  },
  log: {
    marginTop: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padding: {
    paddingTop: 20,
  },
  QrGen: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
