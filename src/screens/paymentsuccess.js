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
import Feather from 'react-native-vector-icons/Feather';
import BottomTab from '../navigation/bottomnav';

const PaymentSuccess = ({}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 18, marginBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Regular', color: '#003148'}}> </Text>
        </View>
      </View>


      <View>
        <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
          <Ionicons name="ios-checkmark-outline" size={120} color="#00669B" />
          <Text style={{fontSize: 16, fontFamily: 'Roboto-Medium', color: '#000', marginBottom: 50}}>Payment Successful</Text>
        </View>
      </View>


      <View>
        <TouchableOpacity style={{backgroundColor: '#B8B8B8', borderRadius: 6, marginHorizontal: 20, marginBottom: 5, padding: 15, borderWidth: 0.7}}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="printer" size={22} color="#000" />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color:'#000', fontFamily: 'Roboto-Regular', fontSize: 18}}>  Print Receipt</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 6, marginHorizontal: 20, marginBottom: 18, padding: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{color:'white', fontFamily: 'Roboto-Regular', fontSize: 18}}>     </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color:'white', fontFamily: 'Roboto-Regular', fontSize: 18}}>New Order</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="ios-chevron-forward" size={22} color="#FFF" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
