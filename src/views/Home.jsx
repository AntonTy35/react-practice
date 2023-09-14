import { CocktailsList } from "../components/CocktailsList";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { useGetCocktails } from "../hooks/useGetCoctails";

export const Home = () => {
  const { cocktails, success, loading } = useGetCocktails();

  return (
    <>
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>
        {loading && <Loader />}
        {success && <CocktailsList cocktails={cocktails} />}
      </Section>
    </>
  );
};
