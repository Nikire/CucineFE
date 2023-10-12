import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Loader from "./Loader";
import Logo from "../../../assets/imgs/Logo.png";
import Title from "../../../assets/imgs/Title.png";
import { LinearGradient } from "expo-linear-gradient";

const GlobalLoader = () => {
  return (
    <View style={styles.container1}>
      <LinearGradient
        colors={[
          "#FFF1EB",
          "#FFF1EB",
          "#FFF1EB",
          "#FFF1EB",
          "#FFF1EB",
          "#FFF1EB",
          "#FFF1EB",
          "#FDD4C3",
          "#FDD4C3",
          "#FDD4C3",
        ]}
        style={styles.background}
      />
      <View style={styles.circle}>
        {/* Logo de la aplicación */}
        <Image source={Logo} style={styles.logo} />
        {/* Nombre de la aplicación */}
        <Image source={Title} style={styles.titleLogo} />
        {/* Loader */}
        <Loader />
      </View>
    </View>
  );
};

export default GlobalLoader;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 529,
    height: 547,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 49,
    shadowOpacity: 1,
    elevation: 10,
    borderRadius: 99999,
    alignItems: "center",
    justifyContent: "center",
  },
  titleLogo: {
    marginTop: 20,
    marginBottom: -80,
  },
  logo: {
    marginTop: 100,
    width: 146,
    height: 216,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
  },
});
