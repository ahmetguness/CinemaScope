import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import IntroScreen from "../screens/IntroScreen/IntroScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen/MovieDetailsScreen";
import ActorDetailsScreen from "../screens/ActorDetailsScreen/ActorDetailsScreen";
import SelectedGenreMovieList from "../screens/SelectedGenreMovieList/SelectedGenreMovieList";

export default function AppStackNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
      <Stack.Screen name="ActorDetailsScreen" component={ActorDetailsScreen} />
      <Stack.Screen
        name="SelectedGenreMovieList"
        component={SelectedGenreMovieList}
      />
    </Stack.Navigator>
  );
}
