import { action } from 'typesafe-actions';

// use typescript enum rather than action constants
export enum actionTypes {
   ADD = 'ADD',
   DELETE = 'DELETE',
}

export const todoActions = {
   add: (item: String) => action(actionTypes.ADD, item),
   delete: (idx: number) => action(actionTypes.DELETE, idx),
};

// Discriminated unions
// interface ActionAdd {
//    type: 'ADD';
//    payload: String;
// }

// interface ActionADelete {
//    type: 'DELETE';
//    payload: number;
// }

// type Actions = ActionAdd | ActionADelete;

// function reducer(action: Actions) {
//    switch (action.type) {
//       case 'ADD': {
//          // Payload is a String
//       }
//       case 'DELETE': {
//          // Payload is a number
//       }
//    }
// }
