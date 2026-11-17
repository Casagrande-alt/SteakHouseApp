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
    width: 70,
    height: 70,
    tintColor: '#FF3333',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF2222',
    letterSpacing: 2,
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: 'rgba(50, 30, 30, 0.75)',
    borderRadius: 14,
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: 13,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: 'rgba(60, 35, 35, 0.85)',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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