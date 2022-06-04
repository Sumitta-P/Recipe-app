import { useState, useEffect } from "react";
import './App.css';
import SearchBar from "./components/searchbar.js";
import RecipeCard from "./components/recipecard.js";

const apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  //search for the recipes
  const searchRecipes = async () => {
    setLoading(true);
    const url = apiURL + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = e => {
    e.preventDefault()
    searchRecipes()
  };

  return (
    <div className="container">
      <h2>Recipe App</h2>
      <SearchBar 
        handleSubmit = {handleSubmit}
        value = {query}
        onChange = {e => setQuery(e.target.value)}
        loading = {loading}
      />
      <div className="recipes">
        {recipes ? recipes.map(recipe => (
          <RecipeCard 
            key = {recipe.idMeal}
            recipe = {recipe}
          />
        )): "No recipes!"}
      </div>
    </div>
  );
}

export default App;
