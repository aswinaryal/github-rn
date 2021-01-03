import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ details }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: details.owner.avatar_url }} />
      <Text style={styles.name}>{details.name}</Text>
      <Text>
        {details.forks_count} Fork Counts, {details.language}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
export default ResultsDetail;
