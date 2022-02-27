import React, { useState, useEffect } from 'react';
import { 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill() {
        if (!!newSkill) {
            setMySkills((oldState) => [...oldState, newSkill]);
            setNewSkill('');
        }
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGretting('Good morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGretting('Good afternoon');
        } else {
            setGretting('Good night');
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{gretting}</Text>

            <TextInput 
                style={styles.input} 
                placeholder="New skill" 
                placeholderTextColor="#555" 
                value={newSkill}
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} text="Add" />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => <SkillCard skill={item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        padding: 30,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
});
