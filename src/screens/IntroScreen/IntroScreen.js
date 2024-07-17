import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDimensions } from "../../redux/DimensionSlice";
import { COLORS } from "../../theme/colors";

export default function IntroScreen({ navigation }) {
  const dispatcher = useDispatch();
  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    dispatcher(updateDimensions([width, height]));

    const timer = setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      activeOpacity={1}
      onPress={() => navigation.navigate("HomeScreen")}
    >
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../assets/bg/bg.jpg")}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40%",
          }}
        >
          <Text style={{ color: COLORS.gray1, fontSize: 24 }}>
            Welcome to the CineScop
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
