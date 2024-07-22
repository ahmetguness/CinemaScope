import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { COLORS } from './src/theme/colors';

export default function App() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      {isConnected ? (
        <AppNavigation />
      ) : (
        <View style={styles.container}>
          <Text style={styles.noConnectionText}>No Internet Connection</Text>
        </View>
      )}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryColor
  },
  noConnectionText: {
    fontSize: 20,
    color: COLORS.gray1,
  },
});
