// Import Redux
const { createStore } = require('redux'); // In browser: remove this line

// 1. Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 2. Action Creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// 3. Reducer (Switch-Case)
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

// 4. Manual Store Setup
const store = createStore(counterReducer);

// Subscribe to state changes
store.subscribe(() => console.log('Current State:', store.getState()));

// Dispatch some actions
store.dispatch(increment()); // count: 1
store.dispatch(increment()); // count: 2
store.dispatch(decrement()); // count: 1