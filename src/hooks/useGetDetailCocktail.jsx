import { useEffect, useState } from "react";
import { getCocktailDetail } from "../api/cocktail-service";

export const useGetDetailCocktail = (id) => {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getCocktail = async () => {
      try {
        setLoading(true);
        const cocktail = await getCocktailDetail(id);

        if (!cocktail) return;
        setSuccess(true);
        setCocktail(cocktail);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCocktail();
  }, []);
  return { cocktail, success, loading };
};
