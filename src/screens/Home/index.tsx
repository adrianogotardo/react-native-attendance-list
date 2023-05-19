import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant";
import React, { useState } from "react";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState<string>('');

    function handleParticipantAdd() {
        if(participants.includes(participantName)) {
            return Alert.alert("Existent Participant", "A participant with that name already exists.")
        }
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
    };

    function handleParticipantRemove(name: string) {
        Alert.alert("Remove participant", `Remove participant ${name}?`, [{
                text: 'Yes',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },{
                text: "No",
                style: 'cancel'
        }]);
    };

    return(
        <View style={styles.body}>
            <Text style={styles.title}>
                Event's Name
            </Text>

            <Text style={styles.subtitle}>
                Attendance list
            </Text>

            <View style={styles.form}>
                <TextInput value={participantName} style={styles.input} placeholder="Participant name" placeholderTextColor="#6B6B6B" onChangeText={setParticipantName} />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        removeParticipant={() => handleParticipantRemove(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyListText}>
                        Nobody is here yet
                    </Text>
                )}
            />
    </View>
  )
};