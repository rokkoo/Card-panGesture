import * as MyTypes from 'MyTypes';
import { actionTypes } from '../actions';

interface ITodoModel {
   count: number;
   list: string[];
}

export const initialState: ITodoModel = {
   count: 2,
   list: ['Learning ts', 'Learning things'],
};

export const todoReducer = (
   state: ITodoModel = initialState,
   action: MyTypes.RootAction
) => {
   switch (action.type) {
      case actionTypes.ADD: {
         return {
            ...state,
            count: state.count + 1,
            list: [...state.list, action.payload],
         };
      }
      case actionTypes.DELETE: {
         const list = state.list.filter(
            (todo, index) => index !== action.payload
         );

         return {
            ...state,
            ...list,
            count: state.count - 1,
         };
      }
      default:
         return state;
   }
};
