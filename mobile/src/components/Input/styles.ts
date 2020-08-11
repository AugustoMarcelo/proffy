import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 64,
    backgroundColor: '#fafafc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e6e6f0',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
  },

  label: {
    position: 'absolute',
    fontFamily: 'Poppins_400Regular',
    color: '#9C98A6',
    fontSize: 14,
    top: 20,
    left: 24,
  },

  labelFloating: {
    top: 10,
    fontSize: 10,
  },

  borderOnFocus: {
    position: 'absolute',
    width: 2,
    height: 40,
    backgroundColor: '#8257E5',
    left: -1,
    top: 12,
    borderRadius: 5,
  },

  input: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6A6180',
  }
});

export default styles;
