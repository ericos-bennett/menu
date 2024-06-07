import { Recipe } from "../../../types/types";

export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch('http://localhost:3000/recipes');
  return response.json()
}