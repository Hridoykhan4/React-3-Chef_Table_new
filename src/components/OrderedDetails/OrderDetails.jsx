import PropTypes from "prop-types";
const OrderDetails = ({
  orderItems,
  handlePreparingItem,
  preparingItems,
  calories,
  preparingTime,
  showWantCook2,
}) => {
  return (
    <div className="border border-gray-300">
      <div className="py-2">
        <h2 className="text-lg font-semibold text-center">
          Want To Cook: {orderItems.length}
        </h2>
        <hr className="my-3 w-3/4 mx-auto opacity-30" />
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td className="font-medium text-gray-600">
                    {item?.recipe_name}
                  </td>
                  <td className="text-gray-600 font-medium">
                    {item?.preparing_time} minutes
                  </td>
                  <td className="text-gray-600 font-medium">
                    {item?.calories} calories
                  </td>
                  <td
                    onClick={() => handlePreparingItem(item)}
                    className="text-gray-600 font-medium"
                  >
                    <button className="btn text-xs md:text-base md:font-semibold bg-green-400 md:px-4 border-none outline-none rounded-[50px]">
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showWantCook2 && (
        <div className="py-2">
          <h2 className="text-lg font-semibold text-center">
            Want To Cook: {preparingItems.length}
          </h2>
          <hr className="my-3 w-3/4 mx-auto opacity-30" />
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {preparingItems.map((item, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td className="font-medium text-gray-600">
                      {item?.recipe_name}
                    </td>
                    <td className="text-gray-600 font-medium">
                      {item?.preparing_time} minutes
                    </td>
                    <td className="text-gray-600 font-medium">
                      {item?.calories} calories
                    </td>
                    <td
                      onClick={() => handlePreparingItem(item)}
                      className="text-gray-600 font-medium"
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=" flex justify-center gap-8 mt-4 mr-10">
              <h3 className="font-semibold text-[17px] text-gray-600">
                Total Times: <br /> {preparingTime} minutes
              </h3>
              <h3 className="font-semibold text-[17px] text-gray-600">
                Total Calories: <br />
                {calories} calories
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

OrderDetails.propTypes = {
  orderItems: PropTypes.array,
  handlePreparingItem: PropTypes.func,
  preparingItems: PropTypes.array,
  preparingTime: PropTypes.number,
  calories: PropTypes.number,
  showWantCook2: PropTypes.bool,
};

export default OrderDetails;
