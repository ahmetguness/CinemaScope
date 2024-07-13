import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { img500 } from "../../apiService/apiService";
import { COLORS } from "../../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  updateSelectedGenreId,
  updateSelectedGenreMovies,
} from "../../redux/GenreSlice";
import { updateMovieInfo } from "../../redux/MovieSlice";

export default function SelectedGenreMovieList() {
  const dispatcher = useDispatch();
  const navigation = useNavigation();
  const windowWidth = useSelector((state) => state.dimension.width);
  const windowHeight = useSelector((state) => state.dimension.height);
  const movieList = useSelector((state) => state.genre.selectedGenreMovies);
  const genres = useSelector((state) => state.genre.genres);
  const selectedGenreId = useSelector((state) => state.genre.selectedGenreId);
  const selectedGenre = genres.find((genre) => genre.id === selectedGenreId);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movieList.length > 0) {
      setLoading(false);
    }
  }, [movieList]);

  const handleNavigationBack = () => {
    navigation.goBack();
    dispatcher(updateSelectedGenreMovies({}));
    dispatcher(updateSelectedGenreId(""));
  };

  const handleNavigationMovieDetails = (item) => {
    navigation.navigate("MovieDetailsScreen");
    dispatcher(updateMovieInfo(item));
  };

  return (
    <View style={styles.root}>
      <View
        style={{
          width: windowWidth,
          height: windowHeight * 0.07,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2%",
        }}
      >
        <TouchableOpacity
          style={{ position: "absolute", left: "4%" }}
          onPress={() => handleNavigationBack()}
        >
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.gray1,
            fontSize: 20,
          }}
        >
          {selectedGenre ? selectedGenre.name : ""}
        </Text>
      </View>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{ alignItems: "center" }}
          data={movieList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginBottom: "4%",
                  width: windowWidth * 0.9,
                  height: windowHeight * 0.3,
                  flexDirection: "row",
                  borderRadius: 10,
                  backgroundColor: COLORS.darkGray,
                  padding: 10,
                  marginLeft: windowWidth * 0.05,
                }}
                activeOpacity={0.9}
                onPress={() => handleNavigationMovieDetails(item)}
              >
                <Image
                  style={{
                    height: windowHeight * 0.25,
                    width: windowWidth * 0.4,
                    borderRadius: 10,
                  }}
                  source={{ uri: `${img500}${item.poster_path}` }}
                />
                <View
                  style={{
                    marginLeft: 10,
                    justifyContent: "center",
                    width: windowWidth * 0.45,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: 5,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.gray1,
                      fontSize: 14,
                    }}
                  >
                    {item.overview.length > 100
                      ? `${item.overview.substring(0, 100)}...`
                      : item.overview}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}
