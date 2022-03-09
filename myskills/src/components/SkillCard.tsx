import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ISkillCardProps extends TouchableOpacityProps  {
    skill: string;
}

export function SkillCard({ skill, ...rest }: ISkillCardProps) {
    return (
        <TouchableOpacity 
            style={styles.buttonSkill} 
            activeOpacity={0.8}
            {...rest}
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