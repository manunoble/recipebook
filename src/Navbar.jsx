
function Navbar() {
    return (
    <nav className="navbar">
      <div className="logo">Recipe Book</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Meal Planner</a></li>
        <li><a href="#">My Account</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;