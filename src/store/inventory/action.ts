import { StoreActionTypes, ADD_ITEM_TO_STORE, REMOVE_ITEM_FROM_STORE, Item } from './types';

export function removeItemFromStore ( id: number ): StoreActionTypes {
  return {
    type: REMOVE_ITEM_FROM_STORE,
    payload: id // Will only accept type: number
  }
}

export function addItemToStore ( item: Item ): StoreActionTypes {
  return {
    type: ADD_ITEM_TO_STORE,
    payload: item // Will only accept type: Item
  }
}