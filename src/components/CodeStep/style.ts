import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%', 
        marginBottom: 54
    },
    codeInput: {
        width: 45,
        height: 50,
        borderWidth: 1,
        borderColor: '#8A9297',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 5,
        color: '#FFFFFF',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 16
    },
    button: {
        backgroundColor: '#8AD0EF',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
      },
    buttonText: {
        color: '#003545',
        fontSize: 16,
        fontWeight: '600',
    },
    backButton: {
        backgroundColor: '#18181F',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#8A9297',
    },
    backButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default styles;