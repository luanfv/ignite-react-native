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

interface ISkill {
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<ISkill[]>([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill() {
        if (!!newSkill) {
            const data = {
                id: String(new Date().getTime()),
                name: newSkill,
            }

            setMySkills((oldState) => [...oldState, data]);
            setNewSkill('');
        }
    }

    function handleRemoveSkill(id: string) {
        setMySkills((oldState) => oldState.filter((state) => state.id !== id));
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

            <Button 
                onPress={handleAddNewSkill}
                title="Add" 
            />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)} />}
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
