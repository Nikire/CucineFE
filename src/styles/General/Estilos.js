import { StyleSheet } from "react-native";
let flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
export const stylesCocinar = StyleSheet.create({
  button: {
    width: 239,
    height: 54,
    borderRadius: 50,
    backgroundColor: "#EB5D47",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  container: {
    height: "100%"
  },
  buttonText: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
  },
  containerSuperior: {
    ...flexCenter,
    height: "28%",
    position: "relative",
    width: "100%",
    backgroundColor: "#ED6D5A",
    top: 0
  },
  containerInferior: {
    height: "80%",
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "#fff"
  },
  img1: {
    position: "absolute",
    left: 0,
    bottom: 20
  },
  img2: {
    position: "absolute",
    left: 122,
    bottom: 80
  },
  img3: {
    position: "absolute",
    right: 4,
    bottom: 0
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: "10px",
    fontFamily: "Poppins-Regular",
  },
  parrafo: {
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  containerCategorias: {
    height: "75%",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignContent: "center"
  },
  containerCategoriasMap: {
    padding: 20,
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  containerButton: {
    height: "25%",
    ...flexCenter
  },
  categoria: {
    borderColor: "rgba(239, 126, 108, 0.20)",
    borderWidth: 1,
    borderRadius: 60,
    width: 161.466,
    height: 161.466,
    flexShrink: 0,
    marginBottom: 10,
    ...flexCenter
  },
  categoriaChecked: {
    borderColor: "#EB5D47",
    elevation: 5,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: '#FFF',
    borderWidth: 3,
    borderRadius: 60,
    width: 161.466,
    height: 161.466,
    flexShrink: 0,
    marginBottom: 10,
    ...flexCenter
  },
  textoCategoria: {
    textAlign: "center",
    color: "#EB5D47",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5
  },
  viewChecked: {
    ...flexCenter,
    position: "absolute",
    right: -10,
    bottom: 0
  },
  circle: {
    position: "relative"
  },
  like: {
    position: "absolute"
  }
})