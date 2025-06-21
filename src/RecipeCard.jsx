
function RecipeCard({ recipe }) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>
    </div>
  );
}

export default RecipeCard;
