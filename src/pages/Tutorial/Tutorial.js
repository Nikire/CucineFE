import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import img1 from "../../../assets/imgs/img1.png";
import img2 from "../../../assets/imgs/img2.png";
import img3 from "../../../assets/imgs/img3.png";

const Tutorial = () => {
  const fetchFonts = async () => {
    try {
      await Font.loadAsync({
        "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
      });
      setFontsLoaded(true);
    } catch (error) {
      console.error("Error loading fonts: ", error);
    }
  };

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    fetchFonts();
  }, []);

  const wizard = [
    {
      text: (
        <Text style={styles.bajada}>
          Descubre la
          {
            <Text style={{ fontWeight: "900", color: "#EB5D47" }}>
              {" "}
              receta{" "}
            </Text>
          }
          ideal y prepárala siguiendo las técnicas de cocina de los chefs más
          destacados en Internet.
        </Text>
      ),
      img: img1,
    },
    {
      text: (
        <Text style={styles.bajada}>
          Filtrá usando los{" "}
          {
            <Text
              style={{
                fontWeight: "900",
                color: "#EB5D47",
                textDecorationLine: "underline",
              }}
            >
              ingredientes
            </Text>
          }{" "}
          que tenés en tu cocina, elegí que queres cocinar y busca dentro de un
          catálogo de más de{" "}
          {<Text style={{ fontWeight: "900" }}>1000 recetas</Text>}.
        </Text>
      ),
      img: img2,
    },
    {
      text: (
        <Text>
          Planificá, aprendé y disfrutá un plato de calidad de la forma{" "}
          {
            <Text
              style={{
                fontWeight: "900",
                color: "#EB5D47",
                textDecorationLine: "underline",
              }}
            >
              más fácil
            </Text>
          }
          .{"\n"}
          {"\n"} ¡Con {<Text style={{ fontWeight: "900" }}>Cuciné</Text>} todos
          somos cocineros!
        </Text>
      ),
      img: img3,
    },
  ];

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const step = wizard[currentStep];

  const StepIndicator = ({ currentStep, stepCount }) => {
    const steps = [];
    for (let i = 0; i < stepCount; i++) {
      steps.push(
        <View
          key={i}
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: i === currentStep ? "#EB5D47" : "#ccc",
            margin: 5,
          }}
        />
      );
    }
    return <View style={{ flexDirection: "row" }}>{steps}</View>;
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "#FFF",
          "#FFF",
          "#FFF",
          "#FFF",
          "#FFF",
          "#FFF",
          "#FFF",
          "#FFF1EB",
          "#FDD4C3",
          "#FDD4C3",
        ]}
        style={styles.background}
      />
      {/* View Imagen */}
      <View>
        <Image
          source={step.img}
          alt={`img-${currentStep}`}
          style={styles.img}
        />
      </View>
      {/* View Bajada de texto */}
      <View style={styles.container_bajada}>
        <Text style={styles.bajada}>{step.text}</Text>
      </View>
      {/* View Indicador */}
      <StepIndicator currentStep={currentStep} stepCount={wizard.length} />
      {/* View Botón */}
      <View style={styles.container_button}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (currentStep < wizard.length - 1) {
              setCurrentStep(currentStep + 1);
            }
          }}
        >
          <Text style={styles.buttonText}>
            {currentStep < wizard.length - 1 ? "Siguiente" : "Vamos  !"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.skip}>Saltar</Text>
      </View>
    </View>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  container_bajada: {
    width: 325,
    height: 125,
    backgroundColor: "transparent",
    borderRadius: 20,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  bajada: {
    color: "#3A3A3A",
    fontSize: 16,
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    fontFamily: "Poppins-Regular",
  },
  container_button: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 239,
    height: 54,
    borderRadius: 50,
    backgroundColor: "#EB5D47",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
  },
  skip: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    fontWeight: "200",
    color: "#EF7E6C80",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 20,
  },
  img: {},
});
