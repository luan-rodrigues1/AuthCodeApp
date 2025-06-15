import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  input: {
    backgroundColor: '#18181F',
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 10,
    color: '#DFE3E6',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#8A9297',
    minHeight: 56,
  },
  inputError: {
    borderColor: '#FFB4AB',
  },
  button: {
    backgroundColor: '#8AD0EF',
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#003545',
    fontSize: 16,
    fontWeight: '600',
  },
  errorMessage: {
    color: '#FFB4AB',
    fontSize: 14,
    marginTop: 8,
  },
  errorMessageHidden: {
    opacity: 0,
  }
});

export default styles;