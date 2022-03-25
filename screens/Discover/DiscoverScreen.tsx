import * as React from 'react';
import { StyleSheet } from 'react-native';
import ViewWithLoading from '../../components/ViewWithLoading';

export default function DiscoverScreen() {
    return (
        <ViewWithLoading loading={false}>

        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
