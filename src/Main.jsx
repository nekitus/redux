import {createStore} from "redux";
import React from "react";
import ReactDOM from "react-dom";

// todo reducer
const todo = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case "TOGGLE_TODO":
            if(state.id !== action.id) {
                return state
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

// todos reducer
const todos = (state = [], action) => {
    console.log(state, action)
    switch (action.type){
        case "ADD_TODO":
            return [...state, todo(undefined, action)];
        case "TOGGLE_TODO":
            return state.map(t => todo(t, axtion));
        default:
            return state;
    }
};

const MyComponent = ({state, addTodo, onDecrement}) => (
    <div>
        <div>{state}</div>
        <button onClick={addTodo}>addTodo</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const store = createStore(todos);

const render = () => {
    console.log(store.getState())
    ReactDOM.render(<MyComponent

        value={store.getState()}
        addTodo={() =>
            store.dispatch({
                type: "ADD_TODO",
                id: 1,
                text: "go shoping"
            })
        }
        onDecrement={() =>
            store.dispatch({
                type: "DECREMENT"
            })
        }
    />, document.getElementById("root"));
};

store.subscribe(render);
render();

