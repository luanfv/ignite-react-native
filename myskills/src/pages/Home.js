import React, { useState } from 'react';
import { 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    TouchableOpacity,
} from 'react-native';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        if (!!newSkill) {
            setMySkills((oldState) => [...oldState, newSkill]);
            setNewSkill('');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome</Text>

            <TextInput 
                style={styles.input} 
                placeholder="New skill" 
                placeholderTextColor="#555" 
                value={newSkill}
                onChangeText={setNewSkill}
            />

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.8}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            {
                mySkills.map((skill, index) => {
                    return (
                        <TouchableOpacity 
                            style={styles.buttonSkill} 
                            activeOpacity={0.8}
                            key={index}
                        >
                            <Text style={styles.textSkill}>{skill}</Text>
                        </TouchableOpacity>
                    );
                })
            }
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
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
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
