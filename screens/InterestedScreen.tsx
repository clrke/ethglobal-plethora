import React from "react";
import { StyleSheet, ScrollView,SafeAreaView, SectionList, StatusBar,
   TouchableOpacity } from "react-native";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { LivesData } from "../constants/LivesData";
import {ButtonComponent} from "../components/Button/StyledButton";

export default function InterestedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.InterestedShapeView}>
      </View>
      <View style={styles.InterestedButtonListView}>
      </View>

      <View style={styles.Button}>
      <ButtonComponent title="Next" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Button:{
    paddingVertical: 5,
    paddingHorizontal: 5,
  },

  container: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: "column"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  InterestedButtonListView: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    flex:1,
    width: 390,
    height: 500,
    backgroundColor: '#FCE4C5',
  },
  InterestedShapeView: {
    flex:2,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 390,
    height: 'auto',
  },
  InterestedButtom:{
    flex:3,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 390,
    height: 100,
    backgroundColor: '#222323',
  }
});
