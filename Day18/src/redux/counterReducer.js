const initialState = {
    count: 0
};//initial state


//counterReducer recieves 2 input current state and action

const counterReducer =  (state = initialState, actions) => {

   //define the type of action
    switch(actions.type){
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }; 
        default:
            return state;       
    }
}
export default counterReducer;

