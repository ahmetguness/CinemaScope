import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../theme/colors";
import { img500 } from "../../apiService/apiService";

export default function ActorList({ item }) {
  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={{ color: "white", fontSize: 15 }}>Actors</Text>
        <TouchableOpacity activeOpacity={0.9}>
          <Text style={{ color: COLORS.primaryYellow, fontSize: 15 }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "coulmn",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
                marginHorizontal: "0.5%",
                overflow: "hidden",
                borderRadius: 50,
                borderWidth: 1.75,
                borderColor: COLORS.primaryYellow,
              }}
              source={{ uri: `${img500}${item.profile_path}` }}
            />
            <Text style={{ color: "white" }}>{item.name}</Text>
          </View>
        )}
        style={{width:"100%"}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: "2%",
  },
  textContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: "5%",
    marginBottom: "4%",
  },
});
