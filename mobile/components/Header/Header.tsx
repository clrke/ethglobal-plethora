import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, View, Text, ScrollView } from 'react-native';
import { DefaultColor } from '../../constants/Colors';
import { NavButton } from '../Button/NavButton';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.navigationContainer}>
                <View style={styles.mainContainer}>
                    <Text style={styles.titleStyle}>FOLLOW</Text>
                    <Text style={styles.titleStyle}>POPULAR</Text>
                    <Text style={styles.titleStyle}>MULTI GUEST</Text>
                    <Text style={styles.titleStyle}>PK</Text>
                </View>
                <View style={[styles.mainContainer, { width: '20%' }]}>
                    <Ionicons name='search-outline' size={24} color={DefaultColor.white} />
                    <Ionicons name='notifications-outline' size={24} color={DefaultColor.white} />
                </View>
            </View>
            <View style={styles.subNavContainer}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, }}
                    horizontal={true}
                >
                    <NavButton
                        title='all'
                        onPress={() => { }}
                        selected={true}
                    />
                    <NavButton
                        title='education guest'
                        onPress={() => { }}
                    />
                    <NavButton
                        title='game'
                        onPress={() => { }}
                    />
                    <NavButton
                        title='Fun entertainment'
                        onPress={() => { }}
                    />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: 100,
        width: '100%',
        backgroundColor: DefaultColor.main,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
    },
    navigationContainer: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
    },
    mainContainer: {
        flex: 0,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    titleStyle: {
        color: DefaultColor.white
    },
    subNavContainer: {
        flex: 1,
        alignItems: 'flex-end',
        paddingBottom: 20,
        paddingHorizontal: 10
    }
});
