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

const ViewReceipt = ({}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 18, marginBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="ios-chevron-back" size={25} color="#003148"/>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Regular', color: '#003148'}}>  Print Receipt</Text>
        </View>
      </View>

      <View style={{borderWidth: 1, margin: 35}}>
        <View style={{marginHorizontal: 20, marginVertical: 230}}>
          <Text>Motorshop POS</Text>
          <View style={{borderWidth: 0.9, marginVertical: 10}}></View>
          <Text style={{opacity: 0.2, textAlign: 'center', fontSize: 30, fontFamily: 'Roboto-Medium'}}>Receipt Goes Here!</Text>
          <Text style={{opacity: 0.2, textAlign: 'center', fontSize: 20, fontFamily: 'Roboto-Medium'}}>Custom Contents Here!</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={{backgroundColor: '#B8B8B8', borderRadius: 6, marginHorizontal: 20, marginBottom: 5, padding: 15, borderWidth: 0.7}}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="printer" size={22} color="#000" />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color:'#000', fontFamily: 'Roboto-Regular', fontSize: 18}}>  Print</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


export default ViewReceipt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
