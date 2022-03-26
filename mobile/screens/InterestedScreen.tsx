import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { LivesData } from "../constants/LivesData";
import { ButtonComponent } from "../components/Button/StyledButton";
import { DefaultColor } from "../constants/Colors";
import { MontserratText } from "../components/StyledText";
import { InterestButton } from "../components/Button/InterestButton";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import ViewWithLoading from "../components/ViewWithLoading";
import { useNavigation } from "@react-navigation/native";

export default function InterestedScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <ViewWithLoading loading={loading}>

      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
        >

          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 20 }}>
            <TouchableOpacity>
              <MontserratText style={{
                fontSize: 18
              }}>
                Skip {`>>`}
              </MontserratText>
            </TouchableOpacity>
          </View>
          <View style={styles.InterestedShapeView}>
            <MontserratText style={styles.TextIntestedHeader}>
              Select {`\n`}content {`\n`}that you’re interested {`\n`}in.
            </MontserratText>
          </View>
          <View style={styles.InterestedButtonListView}>
            <View style={[styles.InterestedButtonListView, styles.overrideButton]}>
              <InterestButton
                title="Testing asdas "
                selected={true}
              />
              <InterestButton title="Movies" />
              <InterestButton title="Esports asd asd " />
              <InterestButton title="Sample" />
              <InterestButton title="Sample" />
              <InterestButton
                title="Testing asdas d"
                selected={true}
              />
              <InterestButton
                title="This is a test"
                selected={true}
              />
              <InterestButton title="Esports" />
              <InterestButton
                title="Sample"
                selected={true}
              />
              <InterestButton title="Sample" />
              <InterestButton title="Testing" />
              <InterestButton title="Movies" />
              <InterestButton title="Esports" />
              <InterestButton
                title="Sample"
                selected={true}
              />
              <InterestButton title="Sample" />
              <InterestButton title="Testing" />
              <InterestButton title="Movies" />
              <InterestButton title="Esports" />
              <InterestButton title="Sample" />
              <InterestButton
                title="Sample"
                selected={true}
              />
              <InterestButton title="Testing" />
              <InterestButton title="Movies" />
              <InterestButton title="Esports" />
              <InterestButton title="Sample" />
              <InterestButton title="Sample" />
              <InterestButton title="Testing" />
              <InterestButton title="Movies" />
              <InterestButton title="Esports" />
              <InterestButton title="Sample" />
              <InterestButton title="Sample" />
              <InterestButton title="Testing" />
              <InterestButton title="Movies" />
              <InterestButton title="Esports" />
              <InterestButton title="Sample" />
              <InterestButton title="Sample" />
              <InterestButton title="Testing" />
              <InterestButton title="Movies" />
              <InterestButton title="Esports" />
              <InterestButton title="Sample" />
              <InterestButton title="Sample" />
            </View>
          </View>
        </ScrollView>


      </View>
      <View style={styles.InterestedButtom}>
        <ButtonComponent
          title="Next" backgroundColor={DefaultColor.secondary}
          onPress={() => {
            navigation.navigate("Root");
          }}
        />
      </View>
    </ViewWithLoading>

  );
}

const styles = StyleSheet.create({

  TextIntestedHeader: {
    color: '#FEA42B',
    fontSize: 50,
    fontFamily: 'monstserrat-bold',
  },

  container: {
    flex: 1,
    paddingTop: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  InterestedButtonListView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#FCE4C5',
  },
  InterestedShapeView: {
    flex: 0,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  InterestedButtom: {
    flex: 0,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#FCE4C5',
  },
  overrideButton: {
    justifyContent: 'space-evenly',
    flexShrink: 1
  }
});
