/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTab from '../navigation/bottomnav';

const Payment = ({}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 18, marginBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="ios-chevron-back" size={25} color="#003148"/>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Regular', color: '#003148'}}>  Payment : Cash</Text>
        </View>
      </View>

      <View>
        <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontSize: 17, fontFamily: 'Roboto-Light', marginBottom: 60, marginTop: 10}}>AMOUNT RECEIVED</Text>
          <View style={{flexDirection: 'row', alignItems:'baseline'}}>
            <Text style={{fontSize: 25, fontFamily: 'Roboto-Light', color: '#008ED8'}}>₱</Text>
            <Text style={{fontSize: 70, fontFamily: 'Roboto-Light', color: '#008ED8', marginRight: 10, marginBottom: 20}}>128.90</Text>
          </View>
          <Text style={{fontSize: 16, fontFamily: 'Roboto-Medium', color: '#000', marginBottom: 50}}>Change: ₱ 921.00</Text>
        </View>
      </View>

      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 60, marginBottom: 30}}>
          <TouchableOpacity style={{backgroundColor: '#FFF', width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color: '#003148', fontFamily: 'Roboto-Light', fontSize: 40}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#FFF', width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color: '#003148', fontFamily: 'Roboto-Light', fontSize: 40}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#FFF', width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color: '#003148', fontFamily: 'Roboto-Light', fontSize: 40}}>3</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 60, marginBottom: 30}}>
          <TouchableOpacity style={{backgroundColor: '#FFF', width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color: '#003148', fontFamily: 'Roboto-Light', fontSize: 40}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#FFF', width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color: '#003148', fontFamily: 'Roboto-Light', fontSize: 40}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#FFF', width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color: '#003148', fontFamily: 'Roboto-Light', fontSize: 40}}>6</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 60, marginBottom: 30}}>
          <TouchableOpacity style={{backgroundColor: '#FFF', width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color: '#003148', fontFamily: 'Roboto-Light', fontSize: 40}}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#FFF', width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color: '#003148', fontFamily: 'Roboto-Light', fontSize: 40}}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#FFF', width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color: '#003148', fontFamily: 'Roboto-Light', fontSize: 40}}>9</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 60, marginBottom: 30}}>
          <TouchableOpacity disabled={true} style={{width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#FFF', width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', color: '#003148', fontFamily: 'Roboto-Light', fontSize: 40}}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '17%', height: '110%', marginHorizontal: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name="backspace" size={50} color="#00669B"/>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 6, marginHorizontal: 20, marginBottom: 18, padding: 17}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color:'white', fontFamily: 'Roboto-Bold', fontSize: 15}}>₱</Text>
              <Text style={{color:'white', fontFamily: 'Roboto-Bold', fontSize: 18}}> 150.05</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color:'white', fontSize: 16}}>Charge  </Text>
            <Ionicons name="ios-chevron-forward" size={22} color="#FFF" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
