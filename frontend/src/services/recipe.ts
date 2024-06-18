import { Recipe } from '../types'

const recipesEndpoint = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/${import.meta.env.VITE_API_STAGE}/recipes`

export const getRecipe = async (recipeId: string): Promise<Recipe> => {
  const response = await fetch(`${recipesEndpoint}/${recipeId}`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch(recipesEndpoint)
  return response.json()
}

export const createRecipe = async (recipeUrl: string): Promise<Recipe> => {
  const response = await fetch(recipesEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ recipeUrl }),
  })
  return response.json()
}
