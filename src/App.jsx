
import Header from "./Header";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import MealPlanner from "./MealPlanner";
import Footer from "./Footer";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <SearchBar />
      <main>
        <RecipeList />
        <MealPlanner />
      </main>
      <Footer />
    </div>
  );
}
export default App;