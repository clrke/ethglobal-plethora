import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import ViewWithLoading from '../components/ViewWithLoading';

export default function StarterScreen() {
  return <ViewWithLoading loading={false}></ViewWithLoading>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
