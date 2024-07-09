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

export default function MovieList({ item }) {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={{ color: "white", fontSize: 15 }}>Top Movies</Text>
        <TouchableOpacity activeOpacity={0.9}>
          <Text style={{ color: COLORS.primaryYellow, fontSize: 15 }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
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
                marginHorizontal: "2%",
              }}
              source={require("../../assets/dummy_assets/dummy_cover2.jpg")}
            />
            <Text style={{ color: "white" }}>asdasda</Text>
          </View>
        )}
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
