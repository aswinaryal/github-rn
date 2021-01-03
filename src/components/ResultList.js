import React from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { useNavigation } from "@react-navigation/native";

const ResultList = ({ title, results }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id + ""}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  owner: item.owner.login,
                  repo: item.name,
                })
              }
            >
              <ResultsDetail details={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultList;
