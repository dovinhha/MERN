import * as types from '../constants/actionTypes';

const reducer = ( state = [], action ) => {
  switch(action.type){
    case types.FETCH_ALL:
      return action.payload;
    case types.CREATE: 
      return [...state,action.payload];
    case types.UPDATE: 
    case types.LIKE: 
      return state.map((post) => post._id===action.payload._id ? action.payload : post);
    case types.DELETE: 
      return state.filter(p => p._id !== action.payload);
    default: 
      return state;
  }
}

export default reducer;