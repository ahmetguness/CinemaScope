import { View, Text, Button, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDimensions } from "../../redux/DimensionSlice";

export default function IntroScreen({ navigation }) {
  const dispatcher = useDispatch();
  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    dispatcher(updateDimensions([width, height]));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>IntroScreen</Text>
      <View style={{ height: 100, width: 100, marginTop: 20 }}>
        <Button
          title="NEXT"
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </View>
  );
}
