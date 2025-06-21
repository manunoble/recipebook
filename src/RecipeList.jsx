
import RecipeCard from './RecipeCard'; 
import image1 from './assets/pancakes1.jpg';
import image2 from './assets/curry2.jpg';
import image3 from './assets/masala.jpg';

function RecipeList({ recipes }) {
  const defaultRecipes = [
    { title: "Fluffy Honey Pancakes", 
      description: "Light and fluffy pancakes made with honey.", 
      image: image1 
    },
    { title: "Chicken and Egg Curry", 
      description: "Spicy, creamy, and protein-rich curry.", 
      image: image2
    },
    { title: "Fries Masala", 
      description: "Crispy fries tossed in a spicy masala.", 
      image: image3 
    }
  ];

  const displayedRecipes = recipes && recipes.length ? recipes : defaultRecipes;

  return (
    <div className="recipe-list">
      {displayedRecipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
