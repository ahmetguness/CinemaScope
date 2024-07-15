import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../theme/colors";
import {
  img500,
  fetchSimilarMovies,
  fetchMovieCredits,
} from "../../apiService/apiService";
import RatingStar from "../../components/RatingStar";
import MovieList from "../../components/lits/MovieList";
import ActorList from "../../components/lits/ActorList";

export default function MovieDetailsScreen() {
  const movieInfo = useSelector((state) => state.movie.movieInfo);
  const windowWidth = useSelector((state) => state.dimension.width);
  const windowheight = useSelector((state) => state.dimension.height);
  const genreList = useSelector((state) => state.genre.genres);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const getMovieDetails = async () => {
      if (movieInfo && movieInfo.id) {
        try {
          const simMovies = await fetchSimilarMovies(movieInfo.id);
          const filteredMovies = simMovies.results.filter(
            (movie) => movie.poster_path
          );
          setSimilarMovies(filteredMovies);

          const movieCast = await fetchMovieCredits(movieInfo.id);
          setCast(movieCast.cast);
        } catch (error) {
          console.error("Error fetching movie details:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    getMovieDetails();
  }, [movieInfo]);

  const movieGenres = movieInfo.genre_ids
    .map((id) => genreList.find((genre) => genre.id === id))
    .filter(Boolean);

  return (
    <>
      <View
        style={{
          width: windowWidth,
          height: windowheight * 0.07,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.primaryColor,
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
            marginTop: "2%",
          }}
        >
          {movieInfo.title}
        </Text>
      </View>
      <ScrollView style={styles.root}>
        {loading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : (
          <>
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
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                maxWidth: windowWidth,
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
                  <Text style={{ color: "white", fontSize: 14 }}>
                    {genre.name}
                  </Text>
                </View>
              ))}
            </View>
            <View
              style={{
                flexDirection: "row",
                width: windowWidth,
                justifyContent: "space-between",
                marginTop: "2%",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "4%",
                }}
              >
                <Text style={{ color: COLORS.gray1, fontSize: 16 }}>
                  Release Date: {movieInfo.release_date}
                </Text>
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
                    width: windowWidth * 0.5,
                    padding: "2%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "4%",
                  }}
                >
                  <RatingStar
                    value={movieInfo.vote_average}
                    voteCount={movieInfo.vote_count}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: "5%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2%",
              }}
            >
              <Text
                style={{
                  color: COLORS.gray1,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
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
            {cast && cast.length > 0 ? (
              <ActorList item={cast} goNextPage={false} title={"Cast"} />
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Text style={{ color: "white" }}>No Cast Found</Text>
              </View>
            )}
            {similarMovies.length > 0 ? (
              <MovieList item={similarMovies} title={"Similar Movies"} />
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "4%",
                }}
              >
                <Text style={{ color: "white" }}>No Similar Movie Found</Text>
              </View>
            )}
          </>
        )}
      </ScrollView>
    </>
  );
}
