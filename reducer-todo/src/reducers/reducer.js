export const initialState = 
    [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }];


export const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "ADD_ITEM":
            return [
                ...state, { item: action.payload, completed: false, id: Date.now() }
            ];
        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {...todo, completed: !todo.completed};
                }
                return todo
            });
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed)
        default:
            return state;
    }
};