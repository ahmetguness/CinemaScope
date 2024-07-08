import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../theme/colors";

export default function HomeScreen({ navigation }) {
  const windowWidth = useSelector((state) => state.dimension.width);
  const windowHeight = useSelector((state) => state.dimension.height);
  console.log(windowHeight, windowWidth);

  const title = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title2}>C</Text>
        <Text style={styles.title1}>inema</Text>
        <Text style={styles.title2}>S</Text>
        <Text style={styles.title1}>cope</Text>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.navBar}>
        <TouchableOpacity activeOpacity={0.8}>
          <MaterialIcons name="menu" size={32} color={COLORS.white} />
        </TouchableOpacity>
        {title()}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("SearchScreen")}
        >
          <FontAwesome name="search" size={26} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
