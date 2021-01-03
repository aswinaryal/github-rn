import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByStarsCount = (count) => {
    return results.filter((result) => {
      return result.stargazers_count >= count;
    });
  };

  if (!results.length) {
    return null;
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="1K+ Stars"
          results={filterResultsByStarsCount(1000)}
        />
        <ResultsList
          title="2K+ Stars"
          results={filterResultsByStarsCount(2000)}
        />
        <ResultsList
          title="3K+ Stars"
          results={filterResultsByStarsCount(3000)}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
