import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
  },
  sectionContainerList: {
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  // Views: {
  //   width: width,
  //   height: 2000,
  //   resizeMode: 'cover',
  //   zIndex: -100,
  // },
});
