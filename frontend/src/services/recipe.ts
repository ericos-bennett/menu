import { Recipe, RecipeMeta, CreateRecipeResponse } from '~/types'

const recipesEndpoint = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/${import.meta.env.VITE_API_STAGE}/recipes`

export const getRecipe = async (recipeId: string): Promise<Recipe> => {
  const response = await fetch(`${recipesEndpoint}/${recipeId}`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

export const getRecipeMetas = async (): Promise<RecipeMeta[]> => {
  const response = await fetch(recipesEndpoint)
  return response.json()
}

export const createRecipe = async (
  recipeUrl: string
): Promise<CreateRecipeResponse> => {
  const response = await fetch(recipesEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ recipeUrl }),
  })
  if (response.status == 409) {
    return response.json()
  }
  if (!response.ok) {
    const { errorMessage } = await response.json()
    throw new Error(errorMessage)
  }
  return response.json()
}
