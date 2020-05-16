declare module 'MyTypes' {
   import { StateType, ActionType } from 'typesafe-actions';
   import * as todo from '../reducers';

   // 1 for reducer, 1 for action creator
   export type ReducerState = StateType<typeof import('../reducers').default>;

   export type RootAction = ActionType<typeof import('../actions/actions')>;
}
