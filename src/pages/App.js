import React, {Component} from 'react';
import {color} from 'react-native-reanimated';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderBackground} from 'react-navigation-stack';

import Beranda from './Rfid';
import Scan from './scan';
import QrGen from './QRmaker';
import Tanaman01 from './Tanaman1';
import Tanaman02 from './Tanaman2';
import Tanaman03 from './Tanaman3';
import Tanaman04 from './Tanaman4';
import Tanaman05 from './Tanaman5';
import Tanaman07 from './Tanaman7';
import Tanaman09 from './Tanaman9';
import Tanaman10 from './Tanaman10';
import Tanaman11 from './Tanaman11';
import Tanaman12 from './Tanaman12';
import Tanaman13 from './Tanaman13';
import Tanaman14 from './Tanaman14';
import Tanaman15 from './Tanaman15';
import Tanaman16 from './Tanaman16';
import Tanaman17 from './Tanaman17';
import Tanaman18 from './Tanaman18';
import Tanaman19 from './Tanaman19';
import Tanaman20 from './Tanaman20';
import Tanaman21 from './Tanaman21';
import Tanaman22 from './Tanaman22';
import Tanaman23 from './Tanaman23';
import Tanaman24 from './Tanaman24';
import Tanaman25 from './Tanaman25';
import Tanaman26 from './Tanaman26';
import Tanaman27 from './Tanaman27';
import Tanaman28 from './Tanaman28';
import Tanaman29 from './Tanaman29';
import Tanaman30 from './Tanaman30';
import Tanaman31 from './Tanaman31';
import Tanaman32 from './Tanaman32';
import Tanaman33 from './Tanaman33';
import Tanaman34 from './Tanaman34';
import Tanaman35 from './Tanaman35';
import Tanaman36 from './Tanaman36';
import Tanaman37 from './Tanaman37';
import Tanaman38 from './Tanaman38';
import Tanaman39 from './Tanaman39';
import Tanaman40 from './Tanaman40';
import Tanaman41 from './Tanaman41';
import Tanaman42 from './Tanaman42';
import Tanaman43 from './Tanaman43';
import Tanaman44 from './Tanaman44';
import Tanaman45 from './Tanaman45';
import Tanaman46 from './Tanaman46';
import Tanaman47 from './Tanaman47';
import Tanaman48 from './Tanaman48';
import Tanaman49 from './Tanaman49';
import Tanaman50 from './Tanaman50';
//import all the screens we are going to switch

const App = createStackNavigator(
  {
    //Constant which holds all the screens like index of any book
    Beranda: {screen: Beranda},
    Scan: {screen: Scan},
    QrGen: {screen: QrGen},
    Tanaman01: {screen: Tanaman01},
    Tanaman02: {screen: Tanaman02},
    Tanaman03: {screen: Tanaman03},
    Tanaman04: {screen: Tanaman04},
    Tanaman05: {screen: Tanaman05},
    Tanaman07: {screen: Tanaman07},
    Tanaman09: {screen: Tanaman09},
    Tanaman10: {screen: Tanaman10},
    Tanaman11: {screen: Tanaman11},
    Tanaman12: {screen: Tanaman12},
    Tanaman13: {screen: Tanaman13},
    Tanaman14: {screen: Tanaman14},
    Tanaman15: {screen: Tanaman15},
    Tanaman16: {screen: Tanaman16},
    Tanaman17: {screen: Tanaman17},
    Tanaman18: {screen: Tanaman18},
    Tanaman19: {screen: Tanaman19},
    Tanaman20: {screen: Tanaman20},
    Tanaman21: {screen: Tanaman21},
    Tanaman22: {screen: Tanaman22},
    Tanaman23: {screen: Tanaman23},
    Tanaman24: {screen: Tanaman24},
    Tanaman25: {screen: Tanaman25},
    Tanaman26: {screen: Tanaman26},
    Tanaman27: {screen: Tanaman27},
    Tanaman28: {screen: Tanaman28},
    Tanaman29: {screen: Tanaman29},
    Tanaman30: {screen: Tanaman30},
    Tanaman31: {screen: Tanaman31},
    Tanaman32: {screen: Tanaman32},
    Tanaman33: {screen: Tanaman33},
    Tanaman34: {screen: Tanaman34},
    Tanaman35: {screen: Tanaman35},
    Tanaman36: {screen: Tanaman36},
    Tanaman37: {screen: Tanaman37},
    Tanaman38: {screen: Tanaman38},
    Tanaman39: {screen: Tanaman39},
    Tanaman40: {screen: Tanaman40},
    Tanaman41: {screen: Tanaman41},
    Tanaman42: {screen: Tanaman42},
    Tanaman43: {screen: Tanaman43},
    Tanaman44: {screen: Tanaman44},
    Tanaman45: {screen: Tanaman45},
    Tanaman46: {screen: Tanaman46},
    Tanaman47: {screen: Tanaman47},
    Tanaman48: {screen: Tanaman48},
    Tanaman49: {screen: Tanaman49},
    Tanaman50: {screen: Tanaman50},

    //First entry by default be our first screen if we do not define initialRouteName
  },

  {
    initialRouteName: 'Beranda',
    headerMode: null,
  },
);

export default createAppContainer(App);
