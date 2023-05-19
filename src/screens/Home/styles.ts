import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#000',
        padding: 24
    },
    title: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
        marginLeft: 5
    },
    subtitle: {
        color: '#6B6B6B',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 5,
        marginBottom: 30
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 42
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFFFFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31CF67",
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 24
    },
    emptyListText: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center'
    }
});
  