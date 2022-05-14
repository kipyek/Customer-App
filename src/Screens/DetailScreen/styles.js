import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  icon: {
    position: 'absolute',
    top: 30,
    left: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  menuTitle: {
    fontSize: 16,
    letterSpacing: 0.7,
    marginTop: 20
  },
  subtitle: {
    fontSize: 15,
    color: 'gray'
  },
})