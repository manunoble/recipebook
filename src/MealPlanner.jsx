
function MealPlanner() {
  return (
    <div className="meal-planner">
      <h1>Meal Planner</h1>
      <p>Plan your meals for the week!</p>
        <form>
            <label htmlFor="meal-day">Select Day:</label>
            <select id="meal-day">
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
            </select>
    
            <label htmlFor="meal-type">Select Meal Type:</label>
            <select id="meal-type">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            </select>
    
            <button type="submit">Add Meal Plan</button>
        </form>
      
    </div>
  );
}
export default MealPlanner;