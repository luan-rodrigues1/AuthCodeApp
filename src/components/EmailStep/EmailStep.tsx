import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useState } from "react";
import styles from "./style";
import { SendCodeBody } from "../../services/types";
import { post } from "../../services/api";

const EmailStep = ({ handleStep, email, setEmail }: { handleStep: (nextStep: number) => void, email: string,setEmail: React.Dispatch<React.SetStateAction<string>> }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateEmail = (emailText: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailText);
  };

  const handleSendCode = async () => {
    try {
      setIsLoading(true);
      await post<SendCodeBody>("/auth/send-code", { email });
      handleStep(2);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Erro ao enviar email:", error);
      setErrorMessage("Erro ao enviar código");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = async () => {
    if (!email.trim()) {
      setErrorMessage("Por favor, insira um email");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Por favor, insira um email válido");
      return;
    }

    setErrorMessage("");
    handleSendCode();
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
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleEmailChange}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>Continuar</Text>
          )}
        </TouchableOpacity>
    </View>
  );
};

export default EmailStep;