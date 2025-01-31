import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useRef } from "react";
import { COLORS } from "../../theme/colors";
import { img500 } from "../../apiService/apiService";
import { useDispatch } from "react-redux";
import { updateMovieInfo } from "../../redux/MovieSlice";
import { useNavigation } from "@react-navigation/native";

export default function MovieList({ item, title }) {
  const dispatcher = useDispatch();
  const navigation = useNavigation();
  const flatListRef = useRef(null);

  const handleSelectMovie = (item) => {
    dispatcher(updateMovieInfo(item));
    navigation.navigate("MovieDetailsScreen");

    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const filteredData = item.filter((movie) => movie.poster_path);

  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={{ color: COLORS.primaryYellow, fontSize: 15 }}>{title}</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={filteredData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handleSelectMovie(item)}
          >
            <Image
              style={styles.image}
              source={{ uri: `${img500}${item.poster_path}` }}
            />
            <Text style={styles.itemText}>
              {item.title.length > 12
                ? item.title.substring(0, 12) + "..."
                : item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: "2%",
    marginBottom: "2%",
  },
  textContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: "5%",
    marginBottom: "4%",
  },
  itemContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  image: {
    height: 100,
    width: 100,
    overflow: "hidden",
    borderWidth: 0.75,
    borderColor: COLORS.gray1,
  },
  itemText: {
    color: "white",
  },
});
