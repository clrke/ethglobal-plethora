import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { DefaultColor } from "../../constants/Colors";

interface IProps {
    title: string;
    selected?: boolean;
    onPress?: () => void;
}

export function NavButton(props: IProps) {

    return (
        <TouchableOpacity
            style={[styles.buttonStyle, props.selected && { backgroundColor: DefaultColor.light }]}
        >
            <Text style={{ color: props.selected ? DefaultColor.black : DefaultColor.white, textTransform: 'capitalize' }}>{props.title}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    buttonStyle: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20
    }
});
