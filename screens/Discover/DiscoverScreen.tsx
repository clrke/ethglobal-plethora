import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ViewWithLoading from '../../components/ViewWithLoading';

export default function DiscoverScreen() {
    return (
        <ViewWithLoading loading={false}>
            <View style={{ backgroundColor: 'white' }}>

            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
