import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

const ReviewStep = ({ handleStep }: { handleStep: (nextStep: number) => void }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => handleStep(3)}>
                <Text style={styles.buttonText}>Validar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => handleStep(1)}> 
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
        </View> 
    );
};

export default ReviewStep;  