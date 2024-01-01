import { View } from "react-native";
import { stylesCocinar } from "../../../styles/General/Estilos";
const estructuraBody = ({ children }) => {
  return <View style={stylesCocinar.containerInferior}>{children}</View>
}
export default estructuraBody;