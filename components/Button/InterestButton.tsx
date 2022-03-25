import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { Button } from "react-native-elements";
import { Surface } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { DefaultColor } from "../../constants/Colors";
import { MontserratText } from "../StyledText";

interface IProps {
    title: string;
    type?: any;
    backgroundColor?: string;
    onPress?: () => void;
    icon?: { name: any, color: string | undefined };
    titleStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
}

export function InterestButton(props: IProps) {

    return (
           <TouchableOpacity style={styles.surface} >
            <MontserratText style={{color: DefaultColor.white}}>{props.title}</MontserratText>
           </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    surface: {
        flex: 0,
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 50,
        minHeight: 35,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: DefaultColor.main,
    },

});
