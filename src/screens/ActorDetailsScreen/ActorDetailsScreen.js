import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme/colors";
import { img500 } from "../../apiService/apiService";
import { updateMovieInfo } from "../../redux/MovieSlice";

export default function ActorDetailsScreen() {
  const dispatcher = useDispatch();
  const navigation = useNavigation();
  const windowWidth = useSelector((state) => state.dimension.width);
  const windowheight = useSelector((state) => state.dimension.height);
  const actorDetails = useSelector((state) => state.actor.actorInfo);

  const gender = actorDetails.gender === 1 ? "Female" : "Male";

  const handleSelectMovie = (item) => {
    dispatcher(updateMovieInfo(item));
    navigation.navigate("MovieDetailsScreen");
  };

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
          {actorDetails.name}
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View
          style={{
            width: windowWidth,
            height: windowheight * 0.4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: windowheight * 0.35, width: windowWidth * 0.5 }}
            source={{ uri: `${img500}${actorDetails.profile_path}` }}
            resizeMode="contain"
          />
        </View>
        <View style={{ marginHorizontal: "5%", alignItems: "center" }}>
          <Text
            style={{ color: COLORS.gray1, fontSize: 18, marginVertical: 10 }}
          >
            {`Gender: ${gender}`}
          </Text>
          <Text
            style={{ color: COLORS.gray1, fontSize: 18, marginVertical: 10 }}
          >
            {`Department: ${actorDetails.known_for_department}`}
          </Text>
          <Text
            style={{ color: COLORS.gray1, fontSize: 18, marginVertical: 10 }}
          >
            {`Popularity: ${actorDetails.popularity}`}
          </Text>
        </View>
        {actorDetails.known_for && actorDetails.known_for.length > 0 ? (
          <View style={{ width: windowWidth, paddingHorizontal: "5%" }}>
            <Text
              style={{ color: COLORS.gray1, fontSize: 20, marginVertical: 10 }}
            >
              Known For:
            </Text>
            {actorDetails.known_for.map((movie) => (
              <TouchableOpacity
                onPress={() => handleSelectMovie(movie)}
                key={movie.id}
                style={{
                  flexDirection: "row",
                  marginBottom: "8%",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    height: 100,
                    width: 70,
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                  source={{ uri: `${img500}${movie.poster_path}` }}
                  resizeMode="contain"
                />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: COLORS.gray1,
                      fontSize: 16,
                      marginBottom: 5,
                    }}
                  >
                    {movie.title}
                  </Text>
                  <Text style={{ color: COLORS.gray1, fontSize: 14 }}>
                    {movie.overview}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white" }}>No Movie Found</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
