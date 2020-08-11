import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},

  slide: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },

  header: {
    height: 350,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  slideIcon: {
    position: 'absolute',
    transform: [{ translateY: 20 }],
  },

  content: {
    paddingTop: 66,
    paddingLeft: 40,
    position: 'relative',
  },

  slideNumber: {
    fontFamily: 'Archivo_500Medium',
    fontSize: 40,
    color: '#6A6180',
    opacity: 0.16,
  },

  slideDescription: {
    fontFamily: 'Poppins_500Medium',
    color: '#6A6180',
    fontSize: 24,
    maxWidth: 210,
    marginTop: 24,
  },

  buttonNextSlide: {
    position: 'absolute',
    right: 28,
    bottom: -70,
  },
});

export default styles;
