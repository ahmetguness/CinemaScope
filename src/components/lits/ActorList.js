import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";
import { img500 } from "../../apiService/apiService";
import { useDispatch } from "react-redux";
import { updateActorInfo } from "../../redux/ActorSlice";
import { useNavigation } from "@react-navigation/native";

export default function ActorList({ item, goNextPage }) {
  const dispatcher = useDispatch();
  const navigation = useNavigation();

  const handleActorDetails =
    goNextPage === true
      ? (item) => {
          dispatcher(updateActorInfo(item));
          navigation.navigate("ActorDetailsScreen");
        }
      : () => null;

  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={{ color: "white", fontSize: 15 }}>Actors</Text>
        <TouchableOpacity activeOpacity={1}>
          <Text style={{ color: COLORS.primaryYellow, fontSize: 15 }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleActorDetails(item)}
            activeOpacity={0.9}
            style={styles.itemContainer}
          >
            <Image
              style={styles.image}
              source={{ uri: `${img500}${item.profile_path}` }}
            />
            <Text style={styles.itemText}>
              {item.name.length > 12
                ? item.name.substring(0, 12) + "..."
                : item.name}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingRight: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: "2%",
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
    borderRadius: 50,
    borderWidth: 0.75,
    borderColor: COLORS.gray1,
  },
  itemText: {
    color: "white",
  },
});
