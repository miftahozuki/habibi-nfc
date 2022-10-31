import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  ProgressBarAndroidBase,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import React, {Component} from 'react';
import {Assets} from 'react-navigation-stack';
import bg from '../assets/bg.png';
import {set} from 'react-native-reanimated';
import axios from 'axios';
import moment from 'moment';

export default class Tanaman11 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tinggi_tanaman: '',
      lebar_daun: '',
      panjang_daun: '',
      panjang_tangkal: '',
      jumlah_daunS: '',
      jumlah_daunR: '',
      jumlah_daunT: '',
      jumlah_bunga: '',
      jumlah_buah: '',
      diameter_buah: '',
      panjang_buah: '',
      warna_buah: '',
      diameter_pangkal: '',
      diameter_1m: '',
      isSubmit: false,
    };
  }

  data = () => {
    const {
      tinggi_tanaman,
      lebar_daun,
      panjang_daun,
      panjang_tangkal,
      jumlah_daunS,
      jumlah_daunR,
      jumlah_daunT,
      jumlah_bunga,
      jumlah_buah,
      diameter_buah,
      panjang_buah,
      warna_buah,
      diameter_pangkal,
      diameter_1m,
      isSubmit,
    } = this.state;
    const datas = `date=${moment().format(
      'YYYY/MM/DD',
    )}&parameters=${tinggi_tanaman},${lebar_daun},${panjang_daun},${panjang_tangkal},${jumlah_daunS},${jumlah_daunR},${jumlah_daunT},${jumlah_bunga},${jumlah_buah},${diameter_buah},${panjang_buah},${warna_buah},${diameter_pangkal},${diameter_1m}`;
    console.log(datas);
    // axios.post('https://sheet.best/api/sheets/147b3f63-e1b5-4320-b37f-a774c54e229e', datas, {headers: {'Content-Type': 'application/json'}}).then((response) =>{console.log(response)})
    axios
      .post('https://api.habibigarden.com/growth/11/add', datas, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      })
      .then(response => {
        console.log(response);
      });
    Alert.alert('Success', 'Data terkirim!', [
      {text: 'Okay', onPress: this.beranda},
    ]);
  };

  beranda = () => {
    const {navigate} = this.props.navigation;
    navigate('Beranda');
  };

  render() {
    const {
      tinggi_tanaman,
      lebar_daun,
      panjang_daun,
      panjang_tangkal,
      jumlah_daunS,
      jumlah_daunR,
      jumlah_daunT,
      jumlah_bunga,
      jumlah_buah,
      diameter_buah,
      panjang_buah,
      warna_buah,
      diameter_pangkal,
      diameter_1m,
      isSubmit,
    } = this.state;

    return (
      // Container Start
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#30ccbc" barStyle="light-content" />
        <ImageBackground
          style={{height: Dimensions.get('window').height / 3.5}}
          source={bg}>
          <View style={styles.brandView}>
            <Text style={styles.brandViewText}>Serenity Farm</Text>
          </View>
        </ImageBackground>
        {/* bottom view */}
        <View style={styles.bottomView}>
          {/* welcome view */}
          <View style={{padding: 40}}>
            <Text style={{color: '#30ccbc', fontSize: 30, fontWeight: 'bold'}}>
              Tomato
            </Text>
            {/* Form Input View */}
            <View>
              <View style={styles.wrapper}>
                <Text style={styles.label}>Tanggal : </Text>
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="#c8c8c8"
                  placeholder="Masukkan Parameter"
                  value={moment().format('DD/MM/YYYY')}
                  editable={false}
                />
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Tinggi Tanaman : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={tinggi_tanaman =>
                      this.setState({tinggi_tanaman})
                    }
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Lebar Daun : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={lebar_daun => this.setState({lebar_daun})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Panjang Daun : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={panjang_daun => this.setState({panjang_daun})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Panjang Tangkal : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={panjang_tangkal =>
                      this.setState({panjang_tangkal})
                    }
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Jumlah Daun Sehat : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={jumlah_daunS => this.setState({jumlah_daunS})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Jumlah Daun Rusak : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={jumlah_daunR => this.setState({jumlah_daunR})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Jumlah Daun Total : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={jumlah_daunT => this.setState({jumlah_daunT})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Jumlah Bunga : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={jumlah_bunga => this.setState({jumlah_bunga})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Jumlah Buah : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={jumlah_buah => this.setState({jumlah_buah})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Diameter Buah : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={diameter_buah =>
                      this.setState({diameter_buah})
                    }
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Panjang Buah : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={panjang_buah => this.setState({panjang_buah})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Warna Buah : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={warna_buah => this.setState({warna_buah})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>
                    Diameter Pangkal {'\n'}Tanaman:{' '}
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={diameter_pangkal =>
                      this.setState({diameter_pangkal})
                    }
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>
                    Diameter Pangkal {'\n'}Batang:
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="1m dari media             "
                    onChangeText={diameter_1m => this.setState({diameter_1m})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={() => this.data()}
                style={styles.button}>
                <Text style={styles.btext}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: '#30ccbc',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 120,
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: 'white',
    bottom: 40,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#30ccbc',
    color: 'black',
    borderRadius: 8,
  },
  wrapper: {
    marginTop: 20,
    //  marginLeft: 20
  },
  wrapper2: {
    flexDirection: 'row',
    marginTop: 20,
  },
  wrapper3: {
    marginLeft: 20,
  },
  label: {
    color: 'black',
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#30ccbc',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  btext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
