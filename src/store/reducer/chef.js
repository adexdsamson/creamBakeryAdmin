import { CHEF, DELETE_CHEF, CLEARCHEF } from '../action/type';


const Chef = (state = [], action) => {
  switch(action.type) {
    case CHEF: 
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          img: action.payload.img,
          job: action.payload.job
        }
      ]
    case DELETE_CHEF:
      return state.filter(({ id }) => id !== action.payload);
    case CLEARCHEF: 
      return state = []
    default:
      return state;
  }
};


export default Chef;