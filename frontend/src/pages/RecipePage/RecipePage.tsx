import { useState, useEffect } from 'react'
import { Recipe } from '../../components/Recipe/Recipe'
import { getRecipe } from '../../services/recipe'
import type { Recipe as RecipeType } from '../../types'
import { useParams, useNavigate } from 'react-router-dom'

const RecipePage: React.FC = () => {
  const navigate = useNavigate()
  const { recipeId } = useParams() as { recipeId: string }
  const [recipe, setRecipe] = useState<RecipeType | null>(null)

  useEffect(() => {
    getRecipe(recipeId)
      .then((recipe) => setRecipe(recipe))
      .catch((error) => {
        if (error.message.includes('404')) {
          navigate('/recipes/404')
        } else {
          console.error('Error fetching recipe:', error)
        }
      })
  }, [recipeId, navigate])

  return (
    <>{!recipe ? <div>Loading...</div> : <Recipe recipe={recipe}></Recipe>}</>
  )
}

export default RecipePage