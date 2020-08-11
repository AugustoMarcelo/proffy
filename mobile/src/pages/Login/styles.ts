import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },

  header: {
    width: '100%',
    height: 380,
    backgroundColor: '#8257E5',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  logoDescription: {
    position: 'absolute',
    transform: [{ translateY: 20 }],
  },

  content: {
    paddingHorizontal: 32,
    paddingTop: 56,
    paddingBottom: 64,
  },

  contentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contentMiddle: {
    paddingVertical: 24,
  },

  contentBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },

  textLoginTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#32264D',
  },

  textCreateAccount: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#8257E5',
  },

  textForgotPassword: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#9C98A6',
  },

  submitButton: {
    backgroundColor: '#04d361',
    flexDirection: 'row',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 16,
  },

  buttonDisabled: {
    backgroundColor: '#DCDCE5',
    flexDirection: 'row',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonTextDisabled: {
    color: '#9C98A6',
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 16,
  },
});

export default styles;
