import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18181F',
    display: 'flex',
    alignItems: 'center',
  },
  containerForm: {
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: '50%'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#DFE3E6',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#C0C8CD',
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 60
  }
});

export default styles;