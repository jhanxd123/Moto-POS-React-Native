/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

const PinLogin = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 90, alignItems: 'center'}}>
        <Text style={{fontSize: 23, fontFamily: 'Roboto-Light', marginBottom: 10, marginRight: 8, color: '#003148'}}>Motorshop</Text>
        <Text style={{fontSize: 52, fontFamily: 'Roboto-Light', color: '#003148'}}>POS</Text>
      </View>

      <Text style={{textAlign: 'center',fontSize: 13, fontFamily: 'Roboto-Light', color: '#003148'}}>Sell, Manage, Engage</Text>
      <Text style={{textAlign: 'center', fontSize: 13, fontFamily: 'Roboto-Medium', color: '#003148', marginTop: 64}}>Enter your PIN</Text>

      <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
        <IonIcons name="information-circle-outline" size={21} color="#003148" style={{marginLeft: -5, marginBottom: -4}}/>
        <Text style={{alignItems: 'center', fontSize: 12.5, fontFamily: 'Roboto-Light', color: '#003148', marginTop: 2, marginLeft: 2}}>Never share your PIN with anyone</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 32}}>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 25, width: '5%', marginHorizontal: 5}}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 25, width: '5%', marginHorizontal: 5}}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 25, width: '5%', marginHorizontal: 5}}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 25, width: '5%', marginHorizontal: 5}}>
          <Text></Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 60, marginBottom: 30}}>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 27}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 27}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 27}}>3</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 60, marginBottom: 30}}>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 27}}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 27}}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 27}}>6</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 60, marginBottom: 30}}>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 27}}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 27}}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 27}}>9</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 60, marginBottom: 30}}>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity disabled={true} style={{borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontFamily: 'Roboto-Bold', fontSize: 27}}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius: 50, width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
          <IonIcons name="backspace" size={68} color="#00669B"/>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
      </View>

      <Text style={{bottom: 0, position: 'absolute', textAlign: 'center', alignSelf: 'center'}}>v1.0.1</Text>
    </SafeAreaView>
  );
}


export default PinLogin;
