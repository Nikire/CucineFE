import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const Loader = () => {
  const circle1Color = useRef(new Animated.Value(0)).current;
  const circle2Color = useRef(new Animated.Value(0)).current;
  const circle3Color = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animationDuration = 1000;

    const animateColor = (color, ref) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(color, {
            toValue: 1,
            duration: animationDuration,
            useNativeDriver: false,
          }),
          Animated.timing(color, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
          }),
          Animated.delay(1000),
        ])
      ).start();
    };

    animateColor(circle1Color, circle1Color);
    setTimeout(
      () => animateColor(circle2Color, circle2Color),
      animationDuration / 3
    );
    setTimeout(
      () => animateColor(circle3Color, circle3Color),
      (animationDuration * 2) / 3
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        {/* Círculo 1 */}
        <Animated.View
          style={[
            styles.circle,
            {
              backgroundColor: circle1Color.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ["#FEE2D7", "#FF3D00", "#FEE2D7"],
              }),
            },
          ]}
        ></Animated.View>
        {/* Círculo 2 */}
        <Animated.View
          style={[
            styles.circle,
            {
              backgroundColor: circle2Color.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ["#FEE2D7", "#FF3D00", "#FEE2D7"],
              }),
            },
          ]}
        ></Animated.View>
        {/* Círculo 3 */}
        <Animated.View
          style={[
            styles.circle,
            {
              backgroundColor: circle3Color.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ["#FEE2D7", "#FF3D00", "#FEE2D7"],
              }),
            },
          ]}
        ></Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderContainer: {
    flexDirection: "row",
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 8,
  },
});

export default Loader;
