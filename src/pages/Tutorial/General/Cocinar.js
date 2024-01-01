import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { stylesCocinar } from "../../../styles/General/Estilos";
import pelotaIzquierda from "../../../../assets/imgs/Cocinar/Ellipse_15.png";
import pelotaMedio from "../../../../assets/imgs/Cocinar/Ellipse_16.png";
import pelotaDerecha from "../../../../assets/imgs/Cocinar/Ellipse_17.png";
import almuerzo from "../../../../assets/imgs/Cocinar/comidas/almuerzo.png";
import apple from "../../../../assets/imgs/Cocinar/comidas/apple.png";
import maleta from "../../../../assets/imgs/Cocinar/comidas/maleta.png";
import postre from "../../../../assets/imgs/Cocinar/comidas/postre.png";
import otros from "../../../../assets/imgs/Cocinar/comidas/otros.png";
import like from "../../../../assets/imgs/Cocinar/chequeado/check.png";
import circle from "../../../../assets/imgs/Cocinar/chequeado/Ellipse_20.png";
import EstructuraPadre from "../../../components/Estrutura/Estructura_pagina/estructura_padre";
import EstructuraHeader from "../../../components/Estrutura/Estructura_pagina/estructura_header";
import EstructuraBody from "../../../components/Estrutura/Estructura_pagina/estructura_body";

export default Cocinar = () => {
  const [scaleAnim] = useState(new Animated.Value(1));

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => startAnimation());
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const [isChecked, setIsChecked] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  });

  const arrayImagenes = [{ title: `Almuerzo/ \n cena`, value: almuerzo }, { title: "Postre", value: postre }, { title: "Desayuno", value: maleta }, { title: "Snack", value: apple }, { title: "Otros", value: otros }]

  const check = (key) => setIsChecked({ ...isChecked, [key]: !isChecked[key] })

  const returnChecked = () => (<View style={stylesCocinar.viewChecked}>
    <Image source={circle} style={stylesCocinar.circle} />
    <Image source={like} style={stylesCocinar.like} />
  </View>)

  return (
    <EstructuraPadre>
      <EstructuraHeader>
        <Animated.Image source={pelotaIzquierda} style={{ ...stylesCocinar.img1, transform: [{ scale: scaleAnim }] }} />
        <Animated.Image source={pelotaMedio} style={{ ...stylesCocinar.img2, transform: [{ scale: scaleAnim }] }} />
        <Animated.Image source={pelotaDerecha} style={{ ...stylesCocinar.img3, transform: [{ scale: scaleAnim }] }} />
        <Text style={stylesCocinar.titulo}>¿Qué querés cocinar?</Text>
        <Text style={stylesCocinar.parrafo}>Seleccioná una o mas categorias.</Text>
      </EstructuraHeader>
      <EstructuraBody>
        <View style={stylesCocinar.containerCategorias}>
          <View style={stylesCocinar.containerCategoriasMap}>
            {arrayImagenes.map((value, key) => (
              <TouchableOpacity onPress={() => check(key)} key={key} >
                <View style={isChecked[key] ? stylesCocinar.categoriaChecked : stylesCocinar.categoria}>
                  <Image style={key === 2 ? { marginLeft: 20 } : {}} source={value.value} />
                  <Text style={stylesCocinar.textoCategoria}>{value.title}</Text>
                  {isChecked[key] ? returnChecked() : null}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={stylesCocinar.containerButton}>
          <TouchableOpacity
            style={stylesCocinar.button}
            onPress={() => { }}
          >
            <Text style={stylesCocinar.buttonText}>
              Siguiente
            </Text>
          </TouchableOpacity>
        </View>
      </EstructuraBody>
    </EstructuraPadre>
  )
}