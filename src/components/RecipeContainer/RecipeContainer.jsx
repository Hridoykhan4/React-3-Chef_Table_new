import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import RecipeCards from "../RecipeCards/RecipeCards";
import OrderDetails from "../OrderedDetails/OrderDetails";

const RecipeContainer = ({ query }) => {
  const [recipes, setRecipes] = useState([]);
  const [showWantCook2, setShowWantCook2] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [preparingItems, setPreparingItems] = useState([]);
  const [preparingTime, setPreparingTime] = useState(0);
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    if (query) {
      const gatherMatched = [];
      for (const e of filteredItems) {
        if (e.recipe_name.toLowerCase().includes(query.toLowerCase())) {
          gatherMatched.push(e);
        }
      }
      if (gatherMatched) {
        setRecipes(gatherMatched);
      }
    } else {
      setRecipes(filteredItems);
    }
  }, [query, filteredItems]);

  const handlePreparingItem = (item) => {
    setShowWantCook2(true);
    const selectedItem = orderItems.find(
      (orderItem) => orderItem.recipe_id === item.recipe_id
    );
    setPreparingTime(preparingTime + selectedItem?.preparing_time);
    setCalories(calories + selectedItem.calories);
    setPreparingItems([...preparingItems, item]);
    const remaining = orderItems.filter(
      (orderItem) => orderItem.recipe_id !== item.recipe_id
    );
    setOrderItems(remaining);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("food.json");
      const data = await res.json();
      setRecipes(data);
      setFilteredItems(data);
    };
    loadData();
  }, []);

  const handleCook = (item) => {
    const isExist = orderItems.find(
      (orderItem) => orderItem.recipe_id === item.recipe_id
    );
    if (!isExist) {
      setOrderItems([...orderItems, item]);
    } else {
      alert("");
    }
  };

  return (
    <div>
      <div className="text-center space-y-2">
        <h3 className="font-semibold text-3xl">Our Recipes</h3>
        <p className="text-gray-600 font-medium">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <section className="flex mt-7 flex-col-reverse sm:flex-row gap-5">
        <div className="grid-cols-2 grid gap-4 sm:w-3/5">
          {recipes.map((recipe) => (
            <RecipeCards
              handleCook={handleCook}
              key={recipe.recipe_id}
              recipe={recipe}
            ></RecipeCards>
          ))}
        </div>

        <div className="sm:w-2/5">
          <OrderDetails
            showWantCook2={showWantCook2}
            preparingItems={preparingItems}
            handlePreparingItem={handlePreparingItem}
            orderItems={orderItems}
            preparingTime={preparingTime}
            calories={calories}
          ></OrderDetails>
        </div>
      </section>
    </div>
  );
};

RecipeContainer.propTypes = {
  query: PropTypes.string,
};

export default RecipeContainer;
