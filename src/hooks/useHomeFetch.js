import React, { useState, useEffect } from "react";

import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const UseHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  //  is value
  // const state = useState();
  // [stateValue, setter for the state]
  // state[0],
  // state[1]

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(false);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => {
        return {
          ...prev,
          page: movies.page,
          results:
            page > 1
              ? [...prev.results, ...movies.results]
              : [...movies.results],
          total_pages: movies.total_pages,
          total_results: movies.total_results,
        };
      });

      // setState(movies);
    } catch (error) {
      setError(true);
    }
  };

  //  initial render
  useEffect(() => {
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // isLoadingMore
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};

export default UseHomeFetch;
