import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
import { Grid } from "./components/styles";

function App() {
  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>
        Recipe List
      </h1>

      <Grid>
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </Grid>
    </>
  );
}

export default App;