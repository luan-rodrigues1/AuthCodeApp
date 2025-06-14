import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./style";

const EmailStep = ({ handleStep }: { handleStep: (nextStep: number) => void }) => {
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateEmail = (emailText: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailText);
  };

  const handleEmailChange = () => {
    if (!email.trim()) {
      setErrorMessage("Por favor, insira um email");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Por favor, insira um email válido");
      return;
    }

    setErrorMessage("");
    console.log("Email válido:", email);
    handleStep(2);
  };

  return (
    <View style={styles.container}>
        <View>
            <TextInput
                style={[styles.input, errorMessage && styles.inputError]}
                placeholder="E-mail"
                placeholderTextColor="#C0C8CD"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(text: string) => {
                setEmail(text);
                setErrorMessage("");
                }}
            />
            {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        </View>
        <TouchableOpacity 
        style={styles.button}
        onPress={handleEmailChange}
        >
        <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
    </View>
  );
};

export default EmailStep;