import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";

export default function MovieDetailsScreen() {
  const movieInfo = useSelector((state) => state.movie.movieInfo);

  return (
    <View
      style={[styles.root, { justifyContent: "center", alignItems: "center" }]}
    >
      <Text style={{ color: "white" }}>{movieInfo.title}</Text>
    </View>
  );
}
