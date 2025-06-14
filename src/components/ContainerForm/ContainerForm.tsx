import { Text, View } from "react-native";
import styles from "./style";
import EmailStep from "../EmailStep/EmailStep";
import ReviewStep from "../ReviewStep/ReviewStep";
import CodeStep from "../CodeStep/CodeStep";
import { useState } from "react";

const ContainerForm = () => {
    const [step, setStep] = useState<number>(1);

    const handleStep = (selectedStep: number) => {
        setStep(selectedStep);
    };

    const subtitle = step === 1 ? "Adicione seu email para continuar" : step === 2 ? "Se o e-mail fornecido for válido, você receberá um código em instantes." : "Digite o código de verificação";

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <Text style={styles.title}>Autenticação</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <View>
                    {step === 1 && <EmailStep handleStep={handleStep} />}
                    {step === 2 && <ReviewStep handleStep={handleStep} />}
                    {step === 3 && <CodeStep handleStep={handleStep} />}
                </View>
            </View>
        </View>
    ); 
};

export default ContainerForm;