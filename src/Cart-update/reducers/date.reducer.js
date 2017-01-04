import {
    ADD_QUANTITY,
    REDUCE_QUANTITY,
    DELETE_ITEM

} from '../constants';

const initialState = {
    items: [
        {name: 'item1', qty: 2, price: 30},
        {name: 'item2', qty: 5, price: 10},
        {name: 'item3', qty: 7, price: 120}
      ]
};

const dateReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_QUANTITY:{
    	let item_list = state.items;
    	item_list[action.add].qty++;
    	return { ...state, item_list };
    }
      case REDUCE_QUANTITY:{
            let item_list = state.items;
	    	if(item_list[action.reduce].qty > 1){
		      item_list[action.reduce].qty--;
		    }
    		return { ...state, item_list };
      }
      case DELETE_ITEM:{
          let item_list = state.items;
    	item_list.splice(action.item,1);
    	return { ...state, item_list };
      }
  }
  return state;
}

export default dateReducer;