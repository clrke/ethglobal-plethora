import * as React from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  StyleProp,
  StyleSheet,
  ViewStyle,
  SafeAreaView,
} from 'react-native';
import Loader from './Loader';
import { HeaderHeightContext } from '@react-navigation/elements';
import useColorScheme from '../hooks/useColorScheme';
import { DefaultColor } from '../constants/Colors';

interface HeaderProps {
  children: React.ReactNodeArray | React.ReactNode;
  style?: StyleProp<ViewStyle>;
  loading: boolean;
}

export default function ViewWithLoading({
  children,
  style,
  loading,
}: HeaderProps) {
  return (
    <HeaderHeightContext.Consumer>
      {(headerHeight) => (
        <KeyboardAvoidingView
          style={[
            style,
            {
              flex: 1,
            },
          ]}
          behavior={Platform.select({ ios: 'height' })}
          keyboardVerticalOffset={headerHeight || 0}
        >
          <SafeAreaView
            style={[
              styles.container,
              {
                flex: 1,
                zIndex: 1,
                backgroundColor: DefaultColor.white,
              },
            ]}
          >
            {children}
            {loading && <Loader />}
          </SafeAreaView>
        </KeyboardAvoidingView>
      )}
    </HeaderHeightContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
