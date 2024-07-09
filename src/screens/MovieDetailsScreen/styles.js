import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
  },
  titleContainer: {
    marginLeft: "2%",
  },
  title: {
    color: COLORS.gray1,
    fontSize: 26,
    marginBottom: "2%",
  },
});
