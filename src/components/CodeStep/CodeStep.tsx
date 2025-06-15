import { Text, View, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { useState, useRef } from "react";
import styles from "./style";
import { patch } from "../../services/api";
import { VerifyCodeBody } from "../../services/types";

const CodeStep = ({ handleStep, email, setEmail }: { handleStep: (nextStep: number) => void, email: string, setEmail: React.Dispatch<React.SetStateAction<string>> }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<Array<TextInput | null>>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleCodeChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
        setErrorMessage("");

        if (text && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerifyCode = async () => {
        const isCodeEmpty = code.some(digit => digit === '');
        const isNotNumber = code.some(digit => !/^\d$/.test(digit));
        
        if (isCodeEmpty) {
            setErrorMessage("Por favor, preencha todos os dígitos do código");
            return;
        }

        if (isNotNumber) {
            setErrorMessage("O código deve conter apenas números");
            return;
        }

        try {
            setIsLoading(true);
            await patch<VerifyCodeBody>("/auth/verify-code", {email: email, code: code.join('')});
            Alert.alert("Código verificado com sucesso", "Obrigado por testar a aplicação, ela terminou aqui.", 
                [{text: "OK", onPress: () => {
                    setEmail("");
                    setCode(['', '', '', '', '', '']);
                    handleStep(1);
                }}]
            );
        } catch (error: any) {
            console.error("Erro ao enviar codigo:", error);
            
            if (error?.status === 404) {
                setErrorMessage("Código inválido ou expirado");
            } else {
                setErrorMessage("Erro ao verificar código. Por favor, tente novamente.");
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.codeContainer}>
                <View style={styles.code}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => {
                                inputRefs.current[index] = ref;
                            }}
                            style={[styles.codeInput, errorMessage && styles.inputError]}
                            maxLength={1}
                            keyboardType="number-pad"
                            value={digit}
                            onChangeText={(text) => handleCodeChange(text, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                        />
                    ))}
                </View>
                <Text style={[styles.errorMessage, !errorMessage && styles.errorMessageHidden]}>{errorMessage || " "}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, isLoading && styles.buttonDisabled]}
                    onPress={handleVerifyCode}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#FFFFFF" />
                    ) : (
                        <Text style={styles.buttonText}>Entrar</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton} disabled={isLoading} onPress={() => handleStep(2)}> 
                    <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CodeStep;