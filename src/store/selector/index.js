import {createSelector} from 'reselect';



const getBlog = ({Blog}) => Blog;
const getChef = ({Chef}) => Chef;
const getRecipe = ({Recipe}) => Recipe;
const getReview = ({Feedback}) => Feedback;
const getOrder = ({Order}) => Order;
const getResponse = ({Response}) => Response;





const getOrderId = (state, props) => state.Order.find(item => item.id === props.id)








export const getBlogState = createSelector(
  [ getBlog ],
  (Blog) => Blog
)
export const getChefState = createSelector(
  [ getChef ],
  (Chef) => Chef
)
export const getRecipeState = createSelector(
  [ getRecipe ],
  (Recipe) => Recipe
)
export const getReviewState = createSelector(
  [ getReview ],
  (Feedback) => Feedback
)
export const getOrderState = createSelector(
  [ getOrder ],
  (Order) => Order
)
export const getResponseState = createSelector(
  [ getResponse ],
  (Response) => Response
)

export const selectOrderId = () => createSelector(
  [ getOrderId ],
  (Order) => Order
)

