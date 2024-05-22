import MovieService from "../../service/MovieService/MovieService";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

const ApiAssistent = () => {
  const { getStarWars } = MovieService();
  const [apiResponse, setApiResponse] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const getListStarwars = useCallback(async () => {
    const currentPath = location.pathname.replace("/", "");
    try {
      const response = await getStarWars(currentPath);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching Star Wars data:", error);
      setIsLoading(false);
    }
  }, [getStarWars, location]);

  useEffect(() => {
    getListStarwars();
  }, [getListStarwars]);

  useEffect(() => {}, [apiResponse?.results]);

  return { apiResponse, isLoading };
};

export default ApiAssistent;
