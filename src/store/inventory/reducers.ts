import { StoreState, REMOVE_ITEM_FROM_STORE, ADD_ITEM_TO_STORE, StoreActionTypes } from './types';

// Set up a default or "initial" state for our app.
const initialState: StoreState = {
  items: [
    {
      id: 1,
      name: 'Task1'
    },
    {
      id: 2,
      name: 'task2'
    },
    {
      id: 3,
      name: 'Task3'
    }
  ]
}

// Now to set up our reducer / functionality!
export function storeReducer ( state = initialState, action: StoreActionTypes ) {
  switch ( action.type ) {
    case REMOVE_ITEM_FROM_STORE:
      return {
        ...state,
        // Filter through, and return the array WITHOUT the matching ID.
        items: state.items.filter( item => item.id !== action.payload )
      }
    case ADD_ITEM_TO_STORE:
      return {
        ...state,
        // Add one new item onto the end of our array!
        items: [ ...state.items, action.payload ]
      }
    default:
      return state;
  }
}
