import { FEEDBACK, DELETE_REVIEW, CLEARREVIEW } from '../action/type';


const Feedback = (state = [], action) => {
  switch(action.type) {
    case FEEDBACK: 
      
      return  [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          img: action.payload.img,
          body: action.payload.body
        }
      ]
    case DELETE_REVIEW:
      return state.filter(({ id }) => id !== action.payload);
    case CLEARREVIEW: 
      return state = []
    default:
      return state;
  }
};


export default Feedback;