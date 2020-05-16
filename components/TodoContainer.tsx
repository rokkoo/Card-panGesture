import React from 'react';
import * as MyTypes from 'MyTypes';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionTypes } from '../actions';

interface TodoContainerState {
   todoInput: string;
}

interface TodoContainerProps {
   count: number;
   todoList: String[];
   addTodo: (item: String) => object;
   deleteTodo: (idx: number) => object;
}

const TodoContainer: React.FC<TodoContainerProps> = () => {
   return <p>asdasd</p>;
};

const MapStateToProps = (store: MyTypes.ReducerState) => {
   return {
      count: store.todo.count,
      list: store.todo.list,
   };
};

const MapDispathToProps = (dispath: Dispatch<MyTypes.RootAction>) => ({
   addTodo: (item: String) => dispath({ type: actionTypes.ADD, payload: item }),
   deleteTodo: (idx: number) =>
      dispath({ type: actionTypes.DELETE, payload: idx }),
});

export default connect();
