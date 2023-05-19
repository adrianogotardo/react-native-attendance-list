import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props {
    name: String,
    removeParticipant: () => void
}

export function Participant({ name, removeParticipant }: Props) {

    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={removeParticipant}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
};