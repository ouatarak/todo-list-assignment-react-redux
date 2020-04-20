export interface Item {
  id: number,
  name: string
}

export interface StoreState {
  items: Item[]
}

// Action "names" or types.
export const REMOVE_ITEM_FROM_STORE = 'REMOVE_ITEM_FROM_STORE';
export const ADD_ITEM_TO_STORE = 'ADD_ITEM_TO_STORE';

// Define action requirements.

interface RemoveItemFromStore {
  type: typeof REMOVE_ITEM_FROM_STORE,
  payload: number // This will match our Item ID.
}

interface AddItemToStore {
  type: typeof ADD_ITEM_TO_STORE,
  payload: Item // We need to pass a new Item that should be added to our store.
}

export type StoreActionTypes = RemoveItemFromStore | AddItemToStore;
