import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HostLive from '../page/HostLive/index'


const Stack = createNativeStackNavigator();
//在这里配置除Tab页以外的页面
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
          <Stack.Screen
            name="HostLive"
            component={HostLive}
            options={{ headerShown: false }}
          />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
