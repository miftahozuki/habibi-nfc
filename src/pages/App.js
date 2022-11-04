import React, {Component} from 'react';
import {color} from 'react-native-reanimated';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderBackground} from 'react-navigation-stack';

import Beranda from './Rfid';
import Scan from './scan';
import QrGen from './QRmaker';
import Tanaman01 from './growth/Tanaman1';
import Tanaman02 from './growth/Tanaman2';
import Tanaman03 from './growth/Tanaman3';
import Tanaman04 from './growth/Tanaman4';
import Tanaman05 from './growth/Tanaman5';
import Tanaman07 from './growth/Tanaman7';
import Tanaman09 from './growth/Tanaman9';
import Tanaman10 from './growth/Tanaman10';
import Tanaman11 from './growth/Tanaman11';
import Tanaman12 from './growth/Tanaman12';
import Tanaman13 from './growth/Tanaman13';
import Tanaman14 from './growth/Tanaman14';
import Tanaman15 from './growth/Tanaman15';
import Tanaman16 from './growth/Tanaman16';
import Tanaman17 from './growth/Tanaman17';
import Tanaman18 from './growth/Tanaman18';
import Tanaman19 from './growth/Tanaman19';
import Tanaman20 from './growth/Tanaman20';
import Tanaman21 from './growth/Tanaman21';
import Tanaman22 from './growth/Tanaman22';
import Tanaman23 from './growth/Tanaman23';
import Tanaman24 from './growth/Tanaman24';
import Tanaman25 from './growth/Tanaman25';
import Tanaman26 from './growth/Tanaman26';
import Tanaman27 from './growth/Tanaman27';
import Tanaman28 from './growth/Tanaman28';
import Tanaman29 from './growth/Tanaman29';
import Tanaman30 from './growth/Tanaman30';
import Tanaman31 from './growth/Tanaman31';
import Tanaman32 from './growth/Tanaman32';
import Tanaman33 from './growth/Tanaman33';
import Tanaman34 from './growth/Tanaman34';
import Tanaman35 from './growth/Tanaman35';
import Tanaman36 from './growth/Tanaman36';
import Tanaman37 from './growth/Tanaman37';
import Tanaman38 from './growth/Tanaman38';
import Tanaman39 from './growth/Tanaman39';
import Tanaman40 from './growth/Tanaman40';
import Tanaman41 from './growth/Tanaman41';
import Tanaman42 from './growth/Tanaman42';
import Tanaman43 from './growth/Tanaman43';
import Tanaman44 from './growth/Tanaman44';
import Tanaman45 from './growth/Tanaman45';
import Tanaman46 from './growth/Tanaman46';
import Tanaman47 from './growth/Tanaman47';
import Tanaman48 from './growth/Tanaman48';
import Tanaman49 from './growth/Tanaman49';
import Tanaman50 from './growth/Tanaman50';
import Tanaman51 from './growth/Tanaman51';
import Tanaman52 from './growth/Tanaman52';
import Tanaman53 from './growth/Tanaman53';
import Tanaman54 from './growth/Tanaman54';
import Tanaman55 from './growth/Tanaman55';
import Tanaman56 from './growth/Tanaman56';
import Tanaman57 from './growth/Tanaman57';
import Tanaman58 from './growth/Tanaman58';
import Tanaman59 from './growth/Tanaman59';
import Tanaman60 from './growth/Tanaman60';
import Tanaman61 from './growth/Tanaman61';
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
    Tanaman44: {screen: Tanaman44},
    Tanaman45: {screen: Tanaman45},
    Tanaman46: {screen: Tanaman46},
    Tanaman47: {screen: Tanaman47},
    Tanaman48: {screen: Tanaman48},
    Tanaman49: {screen: Tanaman49},
    Tanaman50: {screen: Tanaman50},
    Tanaman51: {screen: Tanaman51},
    Tanaman52: {screen: Tanaman52},
    Tanaman53: {screen: Tanaman53},
    Tanaman54: {screen: Tanaman54},
    Tanaman55: {screen: Tanaman55},
    Tanaman56: {screen: Tanaman56},
    Tanaman57: {screen: Tanaman57},
    Tanaman58: {screen: Tanaman58},
    Tanaman59: {screen: Tanaman59},
    Tanaman60: {screen: Tanaman60},
    Tanaman61: {screen: Tanaman61},
    //First entry by default be our first screen if we do not define initialRouteName
  },

  {
    initialRouteName: 'Beranda',
    headerMode: null,
  },
);

export default createAppContainer(App);
