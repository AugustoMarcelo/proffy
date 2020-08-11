import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  boxContainer: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6E6F0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeBoxColor: {
    backgroundColor: '#04D361',
    borderColor: '#04D361',
    borderWidth: 2,
  },

  label: {
    marginLeft: 12,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#9C98A6',
  }
});

export default styles;
