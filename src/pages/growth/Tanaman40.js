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
import bg from '../../assets/bg.png';
import myAPI from '../../services/myAPI';
import moment from 'moment';

export default class Tanaman40 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      satu: '',
      dua: '',
      tiga: '',
      empat: '',
      lima: '',
      enam: '',
      tujuh: '',
      delapan: '',
      sembilan: '',
      sepuluh: '',
      sebelas: '',
      duabelas: '',
      tigabelas: '',
      empatbelas: '',
      limabelas: '',
      enambelas: '',
      tujuhbelas: '',
      delapanbelas: '',
      sembilanbelas: '',
      duapuluh: '',
      duasatu: '',
      duadua: '',
      duatiga: '',
      duaempat: '',
      isSubmit: false,
    };
  }

  data = () => {
    const {
      satu,
      dua,
      tiga,
      empat,
      lima,
      enam,
      tujuh,
      delapan,
      sembilan,
      sepuluh,
      sebelas,
      duabelas,
      tigabelas,
      empatbelas,
      limabelas,
      enambelas,
      tujuhbelas,
      delapanbelas,
      sembilanbelas,
      duapuluh,
      duasatu,
      duadua,
      duatiga,
      duaempat,
      isSubmit,
    } = this.state;
    const datas = `date=${moment().format(
      'YYYY/MM/DD',
    )}&parameters=${satu},${dua},${tiga},${empat},${lima},${enam},${tujuh},${delapan},${sembilan},${sepuluh},${sebelas},${duabelas},${tigabelas},${empatbelas},${limabelas},${enambelas},${tujuhbelas},${delapanbelas},${sembilanbelas},${duapuluh},${duasatu},${duadua},${duatiga},${duaempat}`;
    // console.log(datas);
    myAPI.post('growth/51/add', datas, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    }).then(response => {
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
      satu,
      dua,
      tiga,
      empat,
      lima,
      enam,
      tujuh,
      delapan,
      sembilan,
      sepuluh,
      sebelas,
      duabelas,
      tigabelas,
      empatbelas,
      limabelas,
      enambelas,
      tujuhbelas,
      delapanbelas,
      sembilanbelas,
      duapuluh,
      duasatu,
      duadua,
      duatiga,
      duaempat,
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
            <Text style={styles.brandViewText}>GH{'\n'}Metro Lampung 1</Text>
          </View>
        </ImageBackground>
        {/* bottom view */}
        <View style={styles.bottomView}>
          {/* welcome view */}
          <View style={{padding: 40}}>
            <Text style={{color: '#30ccbc', fontSize: 30, fontFamily: 'Lato-Bold'}}>
              Semangka (WM 1110)
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
                    onChangeText={satu => this.setState({satu})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Diameter Pangkal : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={dua => this.setState({dua})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Diameter : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="1m dari media            "
                    onChangeText={tiga => this.setState({tiga})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Jumlah Cabang : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={empat => this.setState({empat})}
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
                    onChangeText={lima => this.setState({lima})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Jumlah Daun Sehat : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={enam => this.setState({enam})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Jumlah Daun Rusak : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={tujuh => this.setState({tujuh})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Panjang Daun : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={delapan => this.setState({delapan})}
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
                    onChangeText={sembilan => this.setState({sembilan})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Indeks Luas Daun : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={sepuluh => this.setState({sepuluh})}
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
                    onChangeText={sebelas => this.setState({sebelas})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Diameter Buah : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={duabelas => this.setState({duabelas})}
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
                    onChangeText={tigabelas => this.setState({tigabelas})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Jumlah Bunga : </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={empatbelas => this.setState({empatbelas})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>pH: </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={limabelas => this.setState({limabelas})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>N:</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={enambelas => this.setState({enambelas})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>P: </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={tujuhbelas => this.setState({tujuhbelas})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>K:</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={delapanbelas => this.setState({delapanbelas})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Suhu: </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={sembilanbelas =>
                      this.setState({sembilanbelas})
                    }
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Nutrisi:</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={duapuluh => this.setState({duapuluh})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Kelembapan Udara: </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={duasatu => this.setState({duasatu})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Intensitas Cahaya:</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={duadua => this.setState({duadua})}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.wrapper2}>
                <View>
                  <Text style={styles.label}>Tekanan: </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={duatiga => this.setState({duatiga})}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.wrapper3}>
                  <Text style={styles.label}>Kelembapan Tanah:</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#c8c8c8"
                    placeholder="Masukkan Parameter"
                    onChangeText={duaempat => this.setState({duaempat})}
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
