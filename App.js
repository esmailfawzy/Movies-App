import React from 'react';
import {StatusBar} from 'react-native';
import {Details, Home} from './src/pages';
import {COLORS} from './src/assets/Constants';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.main} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen
            name="Detail"
            component={Details}
            sharedElements={(route, otherRoute, showing) => {
              const {ele} = route.params;
              return [`item.${ele.photo}`];
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
