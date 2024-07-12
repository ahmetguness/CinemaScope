import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
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
  const genreList = useSelector((state) => state.genre.genres);
  const navigation = useNavigation();
  console.log(genreList);
  console.log(movieInfo);

  // movieInfo.genre_ids ile genreList'teki eşleşen türleri bulmak
  const movieGenres = movieInfo.genre_ids
    .map((id) => genreList.find((genre) => genre.id === id))
    .filter(Boolean);

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
        style={{
          height: windowheight * 0.4,
          width: windowWidth,
        }}
        source={{ uri: `${img500}${movieInfo.poster_path}` }}
        resizeMode="contain"
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2%",
        }}
      >
        <Text style={{ color: COLORS.gray1, fontSize: 16 }}>
          Release Date: {movieInfo.release_date}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            maxWidth: windowWidth * 0.5,
          }}
        >
          {movieGenres.map((genre) => (
            <View
              key={genre.id}
              style={{
                backgroundColor: COLORS.gray2,
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 10,
                marginRight: 5,
                marginTop: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 14 }}>{genre.name}</Text>
            </View>
          ))}
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            maxWidth: windowWidth * 0.5,
          }}
        >
          <View
            style={{
              width: windowWidth,
              padding: "2%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RatingStar
              value={movieInfo.vote_average}
              voteCount={movieInfo.vote_count}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: "5%" }}>
          <Text
            style={{ color: COLORS.gray1, fontWeight: "bold", fontSize: 16 }}
          >
            OverView:
          </Text>
          <ScrollView
            style={{ maxHeight: 100, minHeight: 100, marginTop: "2%" }}
          >
            <Text style={{ color: COLORS.gray1, fontSize: 14 }}>
              {movieInfo.overview}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
