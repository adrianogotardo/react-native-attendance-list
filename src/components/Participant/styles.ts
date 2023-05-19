import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        color: "#FFFFFF",
        backgroundColor: '#1F1E25',
        fontSize: 16,
        flex: 1,
        marginRight: 12,
        paddingLeft: 16,
        height: 56,
        borderRadius: 5,
        textAlignVertical: 'center'
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#E23C44",
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 24
    }
});