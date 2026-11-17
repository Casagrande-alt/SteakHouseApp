import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
  },
  logoIcon: {
    width: 75,
    height: 75,
    tintColor: '#FF3333',
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF2222',
    letterSpacing: 2,
    marginBottom: 40,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 52,
    backgroundColor: 'rgba(50, 30, 30, 0.75)',
    borderRadius: 14,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: 13,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '600',
  },
  button: {
    width: '100%',
    height: 52,
    backgroundColor: 'rgba(60, 35, 35, 0.85)',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  backButton: {
    backgroundColor: 'rgba(30, 15, 15, 0.6)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 1,
  },
});