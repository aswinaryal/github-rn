import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import github from "../api/github";

const ResultsShowScreen = ({ navigation, route }) => {
  const { owner, repo } = route.params;
  console.log("owner", owner, "repo", repo);

  const [result, setResult] = useState(null);

  const getDetails = async () => {
    try {
      const response = await github.get(`/repos/${owner}/${repo}`);
      console.log("response ==> ", response.data);
      setResult(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result?.full_name}</Text>
      <Image
        source={{ uri: result?.owner?.avatar_url }}
        style={styles.imageDetail}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageDetail: {
    height: "80%",
    width: "100%",
    resizeMode: "contain",
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ResultsShowScreen;
