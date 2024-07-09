import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../theme/colors";
import { img500 } from "../../apiService/apiService";
import RatingStar from "../../components/RatingStar";

export default function MovieDetailsScreen() {
  const movieInfo = useSelector((state) => state.movie.movieInfo);
  const windowWidth = useSelector((state) => state.dimension.width);
  const windowheight = useSelector((state) => state.dimension.height);
  const navigation = useNavigation();
  console.log(movieInfo);

  return (
    <View style={styles.root}>
      <View
        style={{
          width: windowWidth,
          height: windowheight * 0.07,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2%",
        }}
      >
        <TouchableOpacity
          style={{ position: "absolute", left: "4%" }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.gray1,
            fontSize: 20,
          }}
        >
          {movieInfo.title}
        </Text>
      </View>
      <Image
        style={{ height: windowheight * 0.4, width: windowWidth }}
        source={{ uri: `${img500}${movieInfo.poster_path}` }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: windowWidth,
            padding: "2%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>{movieInfo.title}</Text>
          <RatingStar
            value={movieInfo.vote_average}
            voteCount={movieInfo.vote_count}
          />
        </View>
      </View>
    </View>
  );
}
