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
import BottomTab from '../navigation/bottomnav';

const SelectProductsList = ({}) => {
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
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1, marginHorizontal: 30}}>
        <TouchableOpacity>
          <Ionicons name="search" size={25} color="#003148"/>
        </TouchableOpacity>
        <TextInput style={{fontSize: 18, fontFamily: 'Roboto-Regular', color: '#003148', opacity: 0.4, width: '80%'}} placeholder="Search"/>
        <TouchableOpacity>
          <Ionicons name="grid-outline" size={24} color="#003148"/>
        </TouchableOpacity>
      </View>

        <ScrollView horizontal={true} style={{marginHorizontal: 10, height: 205}}>
          <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%', height: 105}}>
            <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 13, padding: 30, elevation: 15, width: 105, height: '100%', margin: 5}}>
              <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <MaterialCommunityIcons name="french-fries" size={40} color="#003148"/>
                <Text style={{color: '#003148', textAlign: 'center', paddingBottom: 20, fontFamily: 'Roboto-Medium'}}>French Fries</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 13, padding: 30, elevation: 15, width: 105, height: '100%', margin: 5}}>
              <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons name="pizza-outline" size={40} color="#FFF"/>
                <Text style={{color: '#FFF', textAlign: 'center', paddingBottom: 20, fontFamily: 'Roboto-Medium'}}>Pizza</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 13, padding: 30, elevation: 15, width: 105, height: '100%', margin: 5}}>
              <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons name="rocket-outline" size={40} color="#003148"/>
                <Text style={{color: '#003148', textAlign: 'center', paddingBottom: 20, fontFamily: 'Roboto-Medium'}}>Rocket</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 13, padding: 30, elevation: 15, width: 105, height: '100%', margin: 5}}>
              <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons name="ios-paw-outline" size={40} color="#003148"/>
                <Text style={{color: '#003148', textAlign: 'center', paddingBottom: 20, fontFamily: 'Roboto-Medium'}}>Paw</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 13, padding: 30, elevation: 15, width: 105, height: '100%', margin: 5}}>
              <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons name="ios-receipt-outline" size={40} color="#003148"/>
                <Text style={{color: '#003148', textAlign: 'center', paddingBottom: 20, fontFamily: 'Roboto-Medium'}}>Resibo</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 13, padding: 30, elevation: 15, width: 105, height: '100%', margin: 5}}>
              <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons name="ios-receipt-outline" size={40} color="#003148"/>
                <Text style={{color: '#003148', textAlign: 'center', paddingBottom: 20, fontFamily: 'Roboto-Medium'}}>Resibo</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <ScrollView style={{marginHorizontal: 8, height: '90%'}}>
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
        <View>
          <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 6, marginHorizontal: 11, marginVertical: 2, padding: 17}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color:'white', fontFamily: 'Roboto-Regular', fontSize: 15}}>Items: </Text>
                <Text style={{color:'white', fontFamily: 'Roboto-Bold', fontSize: 18}}> 3 </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color:'white', fontSize: 16}}>Checkout  </Text>
              <Ionicons name="ios-chevron-forward" size={22} color="#FFF" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      <View style={{elevation: 10, padding: 20, backgroundColor: '#FE18A3'}}>
        <Text style={{textAlign: 'center', color: 'white'}}> BOTTOM NAVIGATION GOES HERE! </Text>
      </View>
    {/* Bottom Navigation Goes here! */}
    </SafeAreaView>
  );
}


export default SelectProductsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
