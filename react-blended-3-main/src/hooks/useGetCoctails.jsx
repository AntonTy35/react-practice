import { useEffect, useState } from "react";
import { getTrendingCocktails } from "../api/cocktail-service";

export const useGetCocktails = () => {
  const [cocktails, setCocktails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getCocktails = async () => {
      try {
        setLoading(true);
        const result = await getTrendingCocktails();
        const cocktails = result.map((res) => res.drinks[0]);
        if (!cocktails) return;
        setSuccess(true);
        setCocktails(cocktails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCocktails();
  }, []);
  return { cocktails, success, loading };
};
