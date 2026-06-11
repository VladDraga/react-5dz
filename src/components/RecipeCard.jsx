import Difficulty from "./Difficulty";
import { FiClock } from "react-icons/fi";
import { LuUtensilsCrossed } from "react-icons/lu";
import { TbChartBar } from "react-icons/tb";

import {
  Card,
  Image,
  Content,
  Title,
  Info,
  InfoItem,
} from "./styles";

function RecipeCard({ recipe }) {
  return (
    <Card highlight={recipe.difficulty === 3}>
      <Image src={recipe.image} alt={recipe.title} />

      <Content>
        <Title>{recipe.title}</Title>

        <Info>
  <InfoItem>
    <FiClock />
    <span>{recipe.time} min</span>
  </InfoItem>

  <InfoItem>
    <LuUtensilsCrossed />
    <span>{recipe.servings} servings</span>
  </InfoItem>

  <InfoItem>
    <TbChartBar />
    <span>{recipe.calories} calories</span>
  </InfoItem>
</Info>

        <Difficulty difficulty={recipe.difficulty} />
      </Content>
    </Card>
  );
}

export default RecipeCard;