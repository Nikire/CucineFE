import { StyleSheet } from "react-native";
let flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
export const stylesGeneral = StyleSheet.create({
  container: {
    height: "100%"
  },
  container_header: {
    ...flexCenter,
    height: "28%",
    position: "relative",
    width: "100%",
    backgroundColor: "#ED6D5A",
    top: 0
  },
  container_body: {
    height: "80%",
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "#fff"
  }
})