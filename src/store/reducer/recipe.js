import { CATEGORY, CLEARRECIPE } from '../action/type';


const Category = (state = [], action) => {
  switch(action.type) {
    case CATEGORY: 
      
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          img: action.payload.img,
          price: action.payload.price,
          body: action.payload.body
        }
      ]
    case CLEARRECIPE: 
      return state = []
    default:
      return state;
  }
};


export default Category;