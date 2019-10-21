import { BLOG, DELETE_BLOG, CLEARBLOG } from '../action/type';


const Blog = (state = [], action) => {
  switch(action.type) {
    case BLOG: 
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          date: action.payload.date,
          img: action.payload.img,
          body: action.payload.body
        }
      ]
    case DELETE_BLOG:
      return state.filter(({ id }) => id !== action.payload);
    case CLEARBLOG: 
      return state = []
    default:
      return state;
  }
};


export default Blog;