import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { styles } from "./styles";

export default function ActorDetailsScreen() {
  const actorDetails = useSelector((state) => state.actor.actorInfo);
  console.log(actorDetails);

  return (
    <View style={styles.root}>
      <Text style={{ color: "white" }}>{actorDetails.name}</Text>
    </View>
  );
}
