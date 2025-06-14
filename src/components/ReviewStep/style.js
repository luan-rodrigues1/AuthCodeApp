import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
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