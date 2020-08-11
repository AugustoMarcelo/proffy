import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 32,
    paddingTop: 101,
    backgroundColor: '#8257e5',
    position: 'relative',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#774DD6',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 101,
    paddingHorizontal: 32,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#6842C2',
    borderStyle: 'solid'
  },

  pageModeText: {
    fontFamily: 'Archivo_400Regular',
    color: '#D4C2FF',
    fontSize: 14,
    lineHeight: 15,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  }
});

export default styles;
