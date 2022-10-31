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

export default class Tanaman15 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tinggi_tanaman: '',
      diameter_pangkal: '',
      diameter_1m: '',
      jumlah_cabang: '',
      jumlah_daunT: '',
      jumlah_daunS: '',
      jumlah_daunR: '',
      panjang_daun: '',
      lebar_daun: '',
      indeks_luas_daun: '',
      jumlah_buah: '',
      diameter_buah: '',
      panjang_buah: '',
      jumlah_bunga: '',
      pH: '',
      n: '',
      p: '',
      k: '',
      nutrisi: '',
      kelembapan_udara: '',
      intensitas_cahaya: '',
      tekanan: '',
      kelembapan_tanah: '',
      isSubmit: false,
    };
  }

  data = () => {
    const {
      tinggi_tanaman,
      diameter_pangkal,
      diameter_1m,
      jumlah_cabang,
      jumlah_daunT,
      jumlah_daunS,
      jumlah_daunR,
      panjang_daun,
      lebar_daun,
      indeks_luas_daun,
      jumlah_buah,
      diameter_buah,
      panjang_buah,
      jumlah_bunga,
      pH,
      n,
      p,
      k,
      suhu,
      nutrisi,
      kelembapan_udara,
      intensitas_cahaya,
      tekanan,
      kelembapan_tanah,
      isSubmit,
    } = this.state;
    const datas = `date=${moment().format(
      'YYYY/MM/DD',
    )}&parameters=${tinggi_tanaman},${diameter_pangkal},${diameter_1m},${jumlah_cabang},${jumlah_daunT},${jumlah_daunS},${jumlah_daunR},${panjang_daun},${lebar_daun},${indeks_luas_daun},${jumlah_buah},${diameter_buah},${panjang_buah},${jumlah_bunga},${pH},${n},${p},${k},${suhu},${nutrisi},${kelembapan_udara},${intensitas_cahaya},${tekanan},${kelembapan_tanah}`;
    console.log(datas);
    // axios.post('https://sheet.best/api/sheets/147b3f63-e1b5-4320-b37f-a774c54e229e', datas, {headers: {'Content-Type': 'application/json'}}).then((response) =>{console.log(response)})
    axios
      .post('https://api.habibigarden.com/growth/15/add', datas, {
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
      diameter_pangkal,
      diameter_1m,
      jumlah_cabang,
      jumlah_daunT,
      jumlah_daunS,
      jumlah_daunR,
      panjang_daun,
      lebar_daun,
      indeks_luas_daun,
      jumlah_buah,
      diameter_buah,
      panjang_buah,
      jumlah_bunga,
      pH,
      n,
      p,
      k,
      suhu,
      nutrisi,
      kelembapan_udara,
      intensitas_cahaya,
      tekanan,
      kelembapan_tanah,
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
            <Text style={styles.brandViewText}>Sintesa Farm</Text>
          </View>
        </ImageBackground>
        {/* bottom view */}
        <View style={styles.bottomView}>
          {/* welcome view */}
          <View style={{padding: 40}}>
            <Text style={{color: '#30ccbc', fontSize: 30, fontFamily: 'Lato-Bold'}}>
              Buncis
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
                  <Text style={styles.label}>Tinggi : </Text>
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
                  <Text style={styles.label}>Diameter Pangkal : </Text>
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
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Jumlah Daun Total : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="dari media                    "
                    onChangeText={diameter_1m => this.setState({diameter_1m})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Jumlah Daun Sehat : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={jumlah_cabang =>
                      this.setState({jumlah_cabang})
                    }
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Jumlah Daun Sakit : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={jumlah_daunT => this.setState({jumlah_daunT})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Panjang Daun : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={jumlah_daunS => this.setState({jumlah_daunS})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Lebar Daun : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={jumlah_daunR => this.setState({jumlah_daunR})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Indeks Luas Daun : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={panjang_daun => this.setState({panjang_daun})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Diameter Kanopi : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={lebar_daun => this.setState({lebar_daun})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Diameter Crop : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={indeks_luas_daun =>
                      this.setState({indeks_luas_daun})
                    }
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Tinggi Crop : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={jumlah_buah => this.setState({jumlah_buah})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>pH : </Text>
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
                  <Text style={styles.label}>N: </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={panjang_buah => this.setState({panjang_buah})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>P:</Text>
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
                  <Text style={styles.label}>K: </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={pH => this.setState({pH})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Suhu:</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={n => this.setState({n})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Nutrisi: </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={p => this.setState({p})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Kelembapan Udara:</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={k => this.setState({k})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Intensitas Cahaya: </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={suhu => this.setState({suhu})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Tekanan:</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={nutrisi => this.setState({nutrisi})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Kelembapan Tanah: </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={kelembapan_udara =>
                      this.setState({kelembapan_udara})
                    }
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Jumlah Polong:</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={intensitas_cahaya =>
                      this.setState({intensitas_cahaya})
                    }
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Diameter Polong: </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={tekanan => this.setState({tekanan})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Panjang Polong:</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={kelembapan_tanah =>
                      this.setState({kelembapan_tanah})
                    }
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
    textTransform: 'uppercase',
    marginBottom: 120,
    fontFamily: 'Lato-Bold'
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
    fontFamily: 'Lato-Medium'
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
    fontFamily: 'Lato-Bold'
  },
});
