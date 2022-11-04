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
import bg from '../../assets/bg.png';
import {set} from 'react-native-reanimated';
import axios from 'axios';
import moment from 'moment';

export default class Tanaman3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testing_1: '',
      testing_2: '',
      isSubmit: false,
    };
  }

  data = () => {
    const datas = `date=${moment().format('YYYY/MM/DD')}&parameters=${
      this.state.testing_1
    },${this.state.testing_2}`;
    console.log(datas);
    // axios.post('https://sheet.best/api/sheets/147b3f63-e1b5-4320-b37f-a774c54e229e', datas, {headers: {'Content-Type': 'application/json'}}).then((response) =>{console.log(response)})
    axios
      .post('https://api.habibigarden.com/growth/3/add', datas, {
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
    const {testing_1, testing_2, isSubmit} = this.state;

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
            <Text style={styles.brandViewText}>Greenhouse {'\n'}Kantor 1</Text>
          </View>
        </ImageBackground>
        {/* bottom view */}
        <View style={styles.bottomView}>
          {/* welcome view */}
          <View style={{padding: 40}}>
            <Text style={{color: '#30ccbc', fontSize: 30, fontFamily: 'Lato-Bold'}}>
              Kentang
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
              <View style={styles.wrapper}>
                <Text style={styles.label}>Testing 1 : </Text>
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="#c8c8c8"
                  placeholder="Masukkan Parameter"
                  onChangeText={testing_1 => this.setState({testing_1})}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.label}>Testing 2 : </Text>
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="#c8c8c8"
                  placeholder="Masukkan Parameter"
                  onChangeText={testing_2 => this.setState({testing_2})}
                  keyboardType="numeric"
                />
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
