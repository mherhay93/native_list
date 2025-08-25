import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: '#ffd700',
    borderWidth: 1,
    marginVertical: 2,
    padding: 4,
    backgroundColor: 'rgba(255,243,163,0.46)',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    color: '#000',
  },
});
