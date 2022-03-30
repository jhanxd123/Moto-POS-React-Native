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
import BottomTab from '../navigation/bottomnav';

const ProductsList = ({}) => {
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
          <Ionicons name="grid-outline" size={24} color="#003148"/>
        </TouchableOpacity>
      </View>
      <ScrollView style={{marginHorizontal: 5, flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
          <View style={{width: '90%', height: '100%'}}>
            <TouchableOpacity style={{backgroundColor: '#FFF', padding: 13, elevation: 10, width: '100%', flexDirection: 'row'}}>
              <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
              <View style={{flexDirection: 'column'}}>
                <Text style={{marginTop: 3, textAlign: 'center', fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148'}}>Far Cry 6</Text>
                <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}>₱150</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
          <View style={{width: '90%', height: '100%'}}>
            <TouchableOpacity style={{backgroundColor: '#FFF', padding: 13, elevation: 10, width: '100%', flexDirection: 'row'}}>
              <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
              <View style={{flexDirection: 'column'}}>
                <Text style={{marginTop: 3, textAlign: 'center', fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148'}}>Far Cry 6</Text>
                <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}>₱150</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
          <View style={{width: '90%', height: '100%'}}>
            <TouchableOpacity style={{backgroundColor: '#FFF', padding: 13, elevation: 10, width: '100%', flexDirection: 'row'}}>
              <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
              <View style={{flexDirection: 'column'}}>
                <Text style={{marginTop: 3, textAlign: 'center', fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148'}}>Far Cry 6</Text>
                <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}>₱150</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
          <View style={{width: '90%', height: '100%'}}>
            <TouchableOpacity style={{backgroundColor: '#FFF', padding: 13, elevation: 10, width: '100%', flexDirection: 'row'}}>
              <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
              <View style={{flexDirection: 'column'}}>
                <Text style={{marginTop: 3, textAlign: 'center', fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148'}}>Far Cry 6</Text>
                <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}>₱150</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
          <View style={{width: '90%', height: '100%'}}>
            <TouchableOpacity style={{backgroundColor: '#FFF', padding: 13, elevation: 10, width: '100%', flexDirection: 'row'}}>
              <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
              <View style={{flexDirection: 'column'}}>
                <Text style={{marginTop: 3, textAlign: 'center', fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148'}}>Far Cry 6</Text>
                <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}>₱150</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
          <View style={{width: '90%', height: '100%'}}>
            <TouchableOpacity style={{backgroundColor: '#FFF', padding: 13, elevation: 10, width: '100%', flexDirection: 'row'}}>
              <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
              <View style={{flexDirection: 'column'}}>
                <Text style={{marginTop: 3, textAlign: 'center', fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148'}}>Far Cry 6</Text>
                <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}>₱150</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
          <View style={{width: '90%', height: '100%'}}>
            <TouchableOpacity style={{backgroundColor: '#FFF', padding: 13, elevation: 10, width: '100%', flexDirection: 'row'}}>
              <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
              <View style={{flexDirection: 'column'}}>
                <Text style={{marginTop: 3, textAlign: 'center', fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148'}}>Far Cry 6</Text>
                <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}>₱150</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
          <View style={{width: '90%', height: '100%'}}>
            <TouchableOpacity style={{backgroundColor: '#FFF', padding: 13, elevation: 10, width: '100%', flexDirection: 'row'}}>
              <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
              <View style={{flexDirection: 'column'}}>
                <Text style={{marginTop: 3, textAlign: 'center', fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148'}}>Far Cry 6</Text>
                <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}>₱150</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={{elevation: 10, padding: 20, backgroundColor: '#FE18A3'}}>
        <Text style={{textAlign: 'center', color: 'white'}}> BOTTOM NAVIGATION GOES HERE! </Text>
      </View>
    {/* Bottom Navigation Goes here! */}
    </SafeAreaView>
  );
}


export default ProductsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
