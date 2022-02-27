import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity 
            style={styles.buttonSkill} 
            activeOpacity={0.8}
            key="1"
        >
            <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 10,
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
});