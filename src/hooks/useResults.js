import { useState, useEffect } from "react";
import github from "../api/github";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErroMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await github.get("/search/repositories", {
        params: {
          q: searchTerm,
        },
      });
      console.log("result ->", response.data);
      setResults(response.data.items);
    } catch (e) {
      console.log(e);
      setErroMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("js");
  }, []);

  return [searchApi, results, errorMessage];
};
