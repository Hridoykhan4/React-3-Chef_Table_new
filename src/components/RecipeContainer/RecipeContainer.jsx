import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import RecipeCards from "../RecipeCards/RecipeCards";
import OrderDetails from "../OrderedDetails/OrderDetails";
import toast from "react-hot-toast";
import { addToLS, getFoodItems, removeFromLS } from "../../utils/localStorage";

const RecipeContainer = ({ query }) => {
  const [recipes, setRecipes] = useState([]);
  const [showWantCook2, setShowWantCook2] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [preparingItems, setPreparingItems] = useState([]);
  const [preparingTime, setPreparingTime] = useState(0);
  const [calories, setCalories] = useState(0);
  const [seeMore, setSeeMore] = useState(false);
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
    removeFromLS(item.recipe_id);
    setPreparingTime(preparingTime + item?.preparing_time);
    setCalories(calories + item.calories);
    setPreparingItems([...preparingItems, item]);
    const remaining = orderItems.filter(
      (orderItem) => orderItem.recipe_id !== item.recipe_id
    );
    setOrderItems(remaining);
  };

  const saveData = (data) => {
    const items = getFoodItems();
    const newArr = [];
    for (const id of items) {
      const findItem = data.find((i) => i.recipe_id === id);
      newArr.push(findItem);
    }
    setOrderItems(newArr);
  };

  useEffect(() => {
    setRecipes((prev) =>
      prev.map((item) => ({
        ...item,
        isDisabled: orderItems.some(
          (orderItem) => orderItem?.recipe_id === item.recipe_id
        ),
      }))
    );
  }, [orderItems]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("food.json");
      const data = await res.json();
      saveData(data);
      if (!seeMore) {
        setFilteredItems(data.slice(0, 2));
      } else {
        setFilteredItems(data);
      }
    };
    loadData();
  }, [seeMore]);

  const handleCook = (item) => {
    const isExist = orderItems.find(
      (orderItem) => orderItem.recipe_id === item.recipe_id
    );
    if (!isExist) {
      addToLS(item.recipe_id);
      setOrderItems([...orderItems, item]);
      toast.success("Added to Ordered Item", {
        duration: 2000,
        position: "top-right",
        style: {
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          color: "#f0f0f0",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "12px 20px",
          borderRadius: "12px",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        },
        icon: "🔥",
      });
    } else {
      toast.error(`Sorry, ${isExist.recipe_name} is not Available`, {
        position: "top right",
        duration: 2000,
        className: `p-5 font-semibold rounded-lg bg-gradient from-red-600 to red-400`,
        style: {
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          color: "white",
        },
      });
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
      <section className="flex mt-7 mb-5 flex-col-reverse sm:flex-row gap-5">
        <div className="sm:grid-cols-2 grid gap-4 sm:w-3/5">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCards
                handleCook={handleCook}
                key={recipe.recipe_id}
                recipe={recipe}
              ></RecipeCards>
            ))
          ) : (
            <p className="text-red-600 font-semibold text-lg  flex justify-center items-center">
              No Items found!! 😢
            </p>
          )}
          {recipes.length > 0 && !query && (
            <div className="self-center mx-auto">
              {!seeMore && (
                <button
                  onClick={() => setSeeMore(true)}
                  className="btn btn-success text-white"
                >
                  See More
                </button>
              )}
            </div>
          )}
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
