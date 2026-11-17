import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3333',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(50, 15, 15, 0.85)',
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  cardInfo: {
    flex: 1,
  },
  pratoTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  pratoCategory: {
    color: '#999999',
    fontSize: 10,
    marginBottom: 6,
  },
  pratoPrice: {
    color: '#CCCCCC',
    fontSize: 12,
  },
  pedirButton: {
    backgroundColor: '#CC2222',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  pedirText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 11,
  },
});