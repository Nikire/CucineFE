import { View } from "react-native";
import { stylesCocinar } from "../../../styles/General/Estilos";
const estructuraHeader = ({ children }) => {
  return <View style={stylesCocinar.containerSuperior}>{children}</View>
}
export default estructuraHeader;