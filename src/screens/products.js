/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomTab from '../navigation/bottomnav';

const Products = ({}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 18, marginBottom: 22.5}}>
        <FontAwesome name="motorcycle" size={25} color="#003148"/>
        <Text style={{fontSize: 18, fontFamily: 'Roboto-Regular', color: '#003148'}}>Motorshop</Text>
        <Text style={{fontSize: 18, fontFamily: 'Roboto-Light', color: '#003148', marginLeft: -75}}>POS</Text>
        <TouchableOpacity>
          <Ionicons name="information-circle-outline" size={25} color="#003148"/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, marginHorizontal: 30}}>
        <TouchableOpacity>
          <Ionicons name="search" size={25} color="#003148"/>
        </TouchableOpacity>
        <TextInput style={{fontSize: 18, fontFamily: 'Roboto-Regular', color: '#003148', opacity: 0.4, width: '80%'}} placeholder="Search"/>
        <TouchableOpacity>
          <Ionicons name="list-outline" size={25} color="#003148"/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
