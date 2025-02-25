import PropTypes from 'prop-types'
import clock from '/src/assets/images/clock.png'
import calorieImg from '/src/assets/images/calories.png'
const RecipeCards = ({ recipe , handleCook}) => {
    const{recipe_name: name, image, description, ingredients,calories, preparing_time} = recipe
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="py-2 px-2">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="py-5 px-2 space-y-2">
        <h2 className="card-title">{name}</h2>
        <p className='text-gray-600 font-medium'>
          {description}
        </p>

        <hr className='opacity-20 my-4'/>

        <div>
            <p className='text-lg font-semibold'>Ingredients: {ingredients.length}</p>
            <ul className='list-disc list-inside'>
                {
                    ingredients.map((element, i) => <li className='text-gray-600 font-medium' key={i}>{element}</li>)
                }
            </ul>
        </div>

        <hr className='opacity-20 my-4'/>
        
        <div className='flex gap-4 items-center'>
            <div className='flex items-center text-gray-600  font-medium'>
                <img className='w-6' src={clock} alt="" /> <span className='ml-2'>{preparing_time} minutes</span>
            </div>
         
            <div className='flex items-center text-gray-600 font-medium'>
                <img className='w-6' src={calorieImg} alt="" /> <span className='ml-2'>{calories} minutes</span>
            </div>
         


        </div>

        <div className="card-actions mt-5">
          <button onClick={() => handleCook(recipe)} className="btn btn-success text-black rounded-l-full rounded-r-full px-5 py-5">Want To Cook</button>
        </div>
      </div>
    </div>
  );
};

RecipeCards.propTypes = {
    recipe: PropTypes.object,
    handleCook: PropTypes.func
}
export default RecipeCards;
