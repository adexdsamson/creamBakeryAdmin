import { 
  CLOSERESPONSE, 
  OPENRESPONSE 
} from '../action/type';


const ResponseBox = (state = false, action) => {
  switch(action.type) {
    case OPENRESPONSE: 
      return action.payload
    case CLOSERESPONSE: 
      return  action.payload
    default:
      return state;
  }
};


export default ResponseBox;