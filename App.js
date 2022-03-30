// Finished Design goto ./src/screens

import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomTab from './src/navigation/bottomnav';
import PinLogin from './src/screens/pinlogin';
import SplashScreen from './src/screens/splashscreen';
import Products from './src/screens/products';
import ProductsList from './src/screens/productslistview';
import SelectProducts from './src/screens/selectproducts';
import SelectProductsList from './src/screens/selectproductslistview';
import Checkout from './src/screens/checkoutitems';
import Payment from './src/screens/paymentcashreceive';
import PaymentSuccess from './src/screens/paymentsuccess';
import ViewReceipt from './src/screens/viewreceipt';

const Stack = createNativeStackNavigator();


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// <BottomTab />

const App = () => {
  return (
      <NavigationContainer>
        <SelectProducts />
      </NavigationContainer>
  );
}

export default App;
