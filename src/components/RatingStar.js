import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { COLORS } from "../theme/colors";

const RatingStar = ({ value, voteCount }) => {
  const ratingValue = parseFloat(value) / 2;

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.container}>
        <Text style={styles.text}>Rating:</Text>
        <StarRatingDisplay
          rating={ratingValue}
          starSize={30}
          starStyle={styles.star}
          enableHalfStar={true}
        />
      </View>
      <Text style={{ color: COLORS.gray1, fontSize: 16 }}>
        Vote Count: {voteCount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "2%",
  },
  text: {
    marginRight: 10,
    fontSize: 16,
    color: COLORS.gray1,
  },
  star: {
    marginHorizontal: 0,
  },
});

export default RatingStar;
