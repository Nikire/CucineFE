import { View } from "react-native-animatable";
import { stylesCocinar } from "../../../styles/General/Estilos";
const estructuraPadre = ({ children }) => {
  return <View style={stylesCocinar.container}>{children}</View>
}

export default estructuraPadre;