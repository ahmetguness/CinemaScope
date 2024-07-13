import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../theme/colors";
import Carousel from "react-native-reanimated-carousel";
import MovieCard from "../../components/cards/MovieCard";

import fetchGenreList, {
  fetchMoviesByGenre,
  fetchNowPlayingMovies,
  fetchPopulerPeople,
  fetchTrendingMovies,
} from "../../apiService/apiService";
import MovieList from "../../components/lits/MovieList";
import ActorList from "../../components/lits/ActorList";
import { updateGenres } from "../../redux/GenreSlice";

export default function HomeScreen({ navigation }) {
  const dispatcher = useDispatch();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [actorList, setActorList] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const windowWidth = useSelector((state) => state.dimension.width);
  const windowHeight = useSelector((state) => state.dimension.height);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    const getActors = async () => {
      try {
        const actors = await fetchPopulerPeople();
        setActorList(actors.results);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };

    const getNowPlayingMovies = async () => {
      try {
        const nowPlayingMovies = await fetchNowPlayingMovies();
        setNowPlayingMovies(nowPlayingMovies.results);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    const getGenres = async () => {
      try {
        const genres = await fetchGenreList();
        setGenres(genres.genres);
        dispatcher(updateGenres(genres.genres));
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    getGenres();
    getNowPlayingMovies();
    getActors();
    getTrendingMovies();
  }, []);

  const title = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title2}>C</Text>
        <Text style={styles.title1}>inema</Text>
        <Text style={styles.title2}>S</Text>
        <Text style={styles.title1}>cope</Text>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.navBar}>
        <TouchableOpacity activeOpacity={0.8}>
          <MaterialIcons name="menu" size={32} color={COLORS.white} />
        </TouchableOpacity>
        {title()}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("SearchScreen")}
        >
          <FontAwesome name="search" size={26} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: windowHeight * 0.02,
          }}
        >
          <Text
            style={{ color: COLORS.gray1, fontSize: 16, fontWeight: "bold" }}
          >
            Trending Movies
          </Text>
        </View>
        <Carousel
          style={{
            marginTop: windowHeight * 0.02,
            width: windowWidth,
            height: windowWidth * 0.9,
            alignItems: "center",
            justifyContent: "center",
          }}
          loop
          width={windowWidth}
          height={windowWidth * 0.8}
          autoPlay={true}
          data={trendingMovies}
          scrollAnimationDuration={5000}
          renderItem={({ item, index }) => <MovieCard item={item} />}
        />
        <MovieList item={nowPlayingMovies} />
        <ActorList item={actorList} />
      </ScrollView>
    </View>
  );
}
