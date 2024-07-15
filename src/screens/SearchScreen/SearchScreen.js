import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../../theme/colors";
import { searchMovies, img500 } from "../../apiService/apiService";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updateMovieInfo } from "../../redux/MovieSlice";
import { Ionicons } from "@expo/vector-icons";

export default function SearchScreen() {
  const dispatcher = useDispatch();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const navigation = useNavigation();

  const handleSearch = async () => {
    if (query.trim() === "") return;
    setLoading(true);
    try {
      const data = await searchMovies(query);
      setResults(data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMoviePress = (movie) => {
    dispatcher(updateMovieInfo(movie));
    navigation.navigate("MovieDetailsScreen");
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity
      style={{ flexDirection: "row", marginVertical: 10 }}
      onPress={() => handleMoviePress(item)}
    >
      <Image
        source={{ uri: `${img500}${item.poster_path}` }}
        style={{ width: 100, height: 150 }}
        resizeMode="cover"
      />
      <View style={{ marginLeft: 10, justifyContent: "center" }}>
        <Text style={{ color: COLORS.white, fontSize: 18 }}>{item.title}</Text>
        <Text style={{ color: COLORS.gray1 }}>{item.release_date}</Text>
        <Text style={{ color: COLORS.gray1 }}>{item.overview}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.primaryColor, padding: 20 }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <TextInput
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            borderRadius: 5,
            padding: 10,
            marginRight: 10,
          }}
          placeholder="Search for movies..."
          placeholderTextColor={COLORS.gray1}
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleCancel}>
          <Ionicons name="close-circle" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          data={results}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}
