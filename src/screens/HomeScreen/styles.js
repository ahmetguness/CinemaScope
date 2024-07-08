import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  title1: {
    color: COLORS.gray1,
    fontSize: 30,
    fontWeight: "bold",
  },
  title2: {
    color: COLORS.yellow3,
    fontSize: 30,
    fontWeight: "bold",
  },
  navBar: {
    marginTop: "4%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "4%",
  },
});
