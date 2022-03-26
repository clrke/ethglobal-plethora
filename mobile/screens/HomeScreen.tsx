import React from "react";
import { StyleSheet, ScrollView,SafeAreaView, SectionList, StatusBar,
   TouchableOpacity } from "react-native";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { LivesData } from "../constants/LivesData";

export default function HomeScreen() {
  const data = LivesData();

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={{
      flexGrow:1,
      flexDirection: "row",
      flexWrap:"wrap",
      justifyContent: "center",
}}>
        
          {data.map((item:any)=>(
            <TouchableOpacity>
             <View style={styles.SquareShapeView} key={item.id}>
               <Text>{item.title}</Text>
            </View>
              </TouchableOpacity>
          ))}
        
       
      </ScrollView>
       
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingVertical: 20,
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

  SquareShapeView: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 160,
    height: 160,
    backgroundColor: '#00BCD4',
    marginTop:5,
    marginBottom: 5,
    marginLeft:5,
    marginRight:5,
    borderRadius:15,
  },
});
