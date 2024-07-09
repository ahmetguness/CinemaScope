import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../theme/colors";
import { img500 } from "../../apiService/apiService";
import { useNavigation } from "@react-navigation/native";
import { updateMovieInfo } from "../../redux/MovieSlice";

export default function MovieCard({ item }) {
  const windowWidth = useSelector((state) => state.dimension.width);
  const windowHeight = useSelector((state) => state.dimension.height);
  const dispatcher = useDispatch();
  const navigation = useNavigation();

  const handleSelectMovie = () => {
    dispatcher(updateMovieInfo(item));
    navigation.navigate("MovieDetailsScreen");
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <TouchableOpacity activeOpacity={0.9} onPress={handleSelectMovie}>
        <Image
          source={{ uri: `${img500}${item.poster_path}` }}
          style={{
            width: windowWidth * 0.6,
            height: windowHeight * 0.4,
          }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1%",
          }}
        >
          <Text style={{ color: COLORS.gray1 }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
