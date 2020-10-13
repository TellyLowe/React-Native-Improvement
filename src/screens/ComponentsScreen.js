import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = "Telly";

    return (
        <View>
            <Text style={styles.textStyle}>Getting Cracking with RN!</Text>
            <Text style={styles.subHeaderStyle}>Hello, My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;