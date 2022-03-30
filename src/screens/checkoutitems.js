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

const Checkout = ({}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 18, marginBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="ios-chevron-back" size={25} color="#003148"/>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Regular', color: '#003148'}}>  Checkout</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ios-trash-outline" size={25} color="#FF0000"/>
        </TouchableOpacity>
      </View>

        <ScrollView style={{marginHorizontal: 3, height: '90%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
            <View style={{width: '90%', height: '100%'}}>
              <View style={{backgroundColor: '#FFF', padding: 20, elevation: 10, width: '100%', height: 130, flexDirection: 'row'}}>
                <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%', height: '50%'}}>
                    <Text style={{marginTop: 3, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', width: '75%'}}>Far Cry 6</Text>
                    <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}> ₱150</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '75%', height: '50%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="minus" size={21} color="#FFF"/>
                      </TouchableOpacity>
                      <Text style={{marginTop: 8, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', marginHorizontal: 30, marginBottom: 5}}>1</Text>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="plus" size={17} color="#FFF"/>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 15, width: 25, height: 25, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                      <AntDesign name="closecircleo" size={17} color="#FF0000"/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
            <View style={{width: '90%', height: '100%'}}>
              <View style={{backgroundColor: '#FFF', padding: 20, elevation: 10, width: '100%', height: 130, flexDirection: 'row'}}>
                <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%', height: '50%'}}>
                    <Text style={{marginTop: 3, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', width: '75%'}}>Far Cry 6</Text>
                    <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}> ₱150</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '75%', height: '50%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="minus" size={21} color="#FFF"/>
                      </TouchableOpacity>
                      <Text style={{marginTop: 8, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', marginHorizontal: 30, marginBottom: 5}}>1</Text>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="plus" size={17} color="#FFF"/>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 15, width: 25, height: 25, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                      <AntDesign name="closecircleo" size={17} color="#FF0000"/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
            <View style={{width: '90%', height: '100%'}}>
              <View style={{backgroundColor: '#FFF', padding: 20, elevation: 10, width: '100%', height: 130, flexDirection: 'row'}}>
                <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%', height: '50%'}}>
                    <Text style={{marginTop: 3, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', width: '75%'}}>Far Cry 6</Text>
                    <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}> ₱150</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '75%', height: '50%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="minus" size={21} color="#FFF"/>
                      </TouchableOpacity>
                      <Text style={{marginTop: 8, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', marginHorizontal: 30, marginBottom: 5}}>1</Text>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="plus" size={17} color="#FFF"/>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 15, width: 25, height: 25, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                      <AntDesign name="closecircleo" size={17} color="#FF0000"/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
            <View style={{width: '90%', height: '100%'}}>
              <View style={{backgroundColor: '#FFF', padding: 20, elevation: 10, width: '100%', height: 130, flexDirection: 'row'}}>
                <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%', height: '50%'}}>
                    <Text style={{marginTop: 3, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', width: '75%'}}>Far Cry 6</Text>
                    <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}> ₱150</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '75%', height: '50%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="minus" size={21} color="#FFF"/>
                      </TouchableOpacity>
                      <Text style={{marginTop: 8, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', marginHorizontal: 30, marginBottom: 5}}>1</Text>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="plus" size={17} color="#FFF"/>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 15, width: 25, height: 25, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                      <AntDesign name="closecircleo" size={17} color="#FF0000"/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
            <View style={{width: '90%', height: '100%'}}>
              <View style={{backgroundColor: '#FFF', padding: 20, elevation: 10, width: '100%', height: 130, flexDirection: 'row'}}>
                <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%', height: '50%'}}>
                    <Text style={{marginTop: 3, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', width: '75%'}}>Far Cry 6</Text>
                    <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}> ₱150</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '75%', height: '50%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="minus" size={21} color="#FFF"/>
                      </TouchableOpacity>
                      <Text style={{marginTop: 8, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', marginHorizontal: 30, marginBottom: 5}}>1</Text>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="plus" size={17} color="#FFF"/>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 15, width: 25, height: 25, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                      <AntDesign name="closecircleo" size={17} color="#FF0000"/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
            <View style={{width: '90%', height: '100%'}}>
              <View style={{backgroundColor: '#FFF', padding: 20, elevation: 10, width: '100%', height: 130, flexDirection: 'row'}}>
                <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%', height: '50%'}}>
                    <Text style={{marginTop: 3, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', width: '75%'}}>Far Cry 6</Text>
                    <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}> ₱150</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '75%', height: '50%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="minus" size={21} color="#FFF"/>
                      </TouchableOpacity>
                      <Text style={{marginTop: 8, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', marginHorizontal: 30, marginBottom: 5}}>1</Text>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="plus" size={17} color="#FFF"/>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 15, width: 25, height: 25, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                      <AntDesign name="closecircleo" size={17} color="#FF0000"/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 3, width: '100%'}}>
            <View style={{width: '90%', height: '100%'}}>
              <View style={{backgroundColor: '#FFF', padding: 20, elevation: 10, width: '100%', height: 130, flexDirection: 'row'}}>
                <Image source={require('../assets/images/FarCry6.png')} style={{width: 64, height: 60, marginRight: 15}} />
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%', height: '50%'}}>
                    <Text style={{marginTop: 3, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', width: '75%'}}>Far Cry 6</Text>
                    <Text style={{marginTop: 8, fontFamily: 'Roboto-Regular', fontSize: 15.5, color: '#003148'}}> ₱150</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '75%', height: '50%'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="minus" size={21} color="#FFF"/>
                      </TouchableOpacity>
                      <Text style={{marginTop: 8, fontFamily: 'Roboto-Bold', fontSize: 15.5, color: '#003148', marginHorizontal: 30, marginBottom: 5}}>1</Text>
                      <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name="plus" size={17} color="#FFF"/>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#FFF', borderRadius: 15, width: 25, height: 25, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                      <AntDesign name="closecircleo" size={17} color="#FF0000"/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity style={{backgroundColor: '#003148', borderRadius: 6, marginHorizontal: 11, marginBottom: 18, padding: 17}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color:'white', fontFamily: 'Roboto-Bold', fontSize: 15}}>₱</Text>
                <Text style={{color:'white', fontFamily: 'Roboto-Bold', fontSize: 18}}> 150.05</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color:'white', fontSize: 16}}>Continue to Payment  </Text>
              <Ionicons name="ios-chevron-forward" size={22} color="#FFF" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}


export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
