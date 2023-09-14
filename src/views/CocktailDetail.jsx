import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { GoBackBtn } from "../components/GoBackBtn";
import { CocktailInfo } from "../components/CocktailInfo";
import { useLocation, useParams } from "react-router-dom";
import { routes } from "../routes";
import { useGetDetailCocktail } from "../hooks/useGetDetailCocktail";
import { useRef } from "react";

export const CocktailDetail = () => {
  const { cocktailId } = useParams();
  const location = useLocation();
  const goBackLink = useRef(location.state?.from || "/");

  const { cocktail, success, loading } = useGetDetailCocktail(cocktailId);

  return (
    <Section>
      {loading && <Loader />}
      <GoBackBtn path={goBackLink.current} />
      {success && <CocktailInfo {...cocktail} />}
    </Section>
  );
};
