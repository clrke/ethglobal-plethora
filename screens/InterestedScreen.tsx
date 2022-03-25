import React from "react";
import { StyleSheet, ScrollView,SafeAreaView, SectionList, StatusBar,
   TouchableOpacity } from "react-native";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { LivesData } from "../constants/LivesData";
import {ButtonComponent} from "../components/Button/StyledButton";
import { DefaultColor } from "../constants/Colors";
import { MontserratText } from "../components/StyledText";
import { InterestButton } from "../components/Button/InterestButton";
import { white } from "react-native-paper/lib/typescript/styles/colors";

export default function InterestedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.InterestedShapeView}>
        <MontserratText style={styles.TextIntestedHeader}>
        Select content that you’re interested in.
        </MontserratText>
      </View>
      <View style={styles.InterestedButtonListView}>
            <InterestButton title="Testing"/>
            <InterestButton title="Movies"/>
              <InterestButton title="Esports"/> 
               <InterestButton title="Sample"/> 
                <InterestButton title="Sample"/>
      </View>

      <View style={styles.InterestedButtom}>
      <ButtonComponent title="Next" backgroundColor={DefaultColor.secondary} style={styles.Button}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  TextIntestedHeader:{
    color: '#FEA42B',
    fontSize: 70,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: "column",
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
    flex:1,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 390,
    height: 600,
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
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#FCE4C5',
  }
});
