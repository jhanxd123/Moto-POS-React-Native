/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const SplashScreen = ({}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#003148'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#FFF', fontFamily: 'Roboto-Thin', fontSize: 23, marginBottom: 17, marginRight: 6}}>Motorshop</Text>
        <Text style={{color: '#FFF', fontFamily: 'Roboto-Light', fontSize: 52}}>POS</Text>
      </View>
      <View>
        <Text style={{color: '#FFF', fontFamily: 'Roboto-Thin', fontSize: 12}}>Sell, Manage, Engage</Text>
      </View>
    </SafeAreaView>

  );
}


export default SplashScreen;
