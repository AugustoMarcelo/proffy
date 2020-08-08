import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '48%',
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  dropdown: {
    height: 54,
    marginTop: 4,
    marginBottom: 16
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
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  }
});

export const dropdownStyles = StyleSheet.create({
  box: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    // borderWidth: 0,
  },

  label: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
  },

  item: {
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 13,
  },

  activeItem: {
    borderLeftWidth: 2,
    borderStyle: 'solid',
    borderColor: '#8257E5',
    backgroundColor: '#EBEBF5',
    paddingLeft: 10,
  }
});

export default styles;
