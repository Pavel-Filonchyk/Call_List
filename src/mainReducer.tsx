const initialState = {
    items: [],
    text: '',
    //error: null as number | null,
    impotant: false,
    modal: false,
    adder: [] as any
}
export type InitialStateType = typeof initialState 
const mainReducer = (state = initialState, action: any) : InitialStateType => {
    switch (action.type){     
        case 'LOADER':
        return {
            ...state,
            items: action.payload, 
        };
        case 'ITEMS_ERROR':
            return {
                ...state,
                items: state.items,
            };
        case 'INPUT_VALUE':
            return{
                ...state,
                text: action.payload,
            }
        case 'DELETE_BOX':
            return{
                ...state,
                impotant: true, 
            }
        case 'VIEW_MODAL':
            return{
                ...state,
                modal: true
            }
        case 'CLOSE_MODAL':
            return{
                ...state,
                modal: false,
            }
        case 'ADD_NUMS':
            return{
                ...state,
                adder: [...state.adder, action.payload]
            }
        default: 
            return state;     
    }
}

export default mainReducer;
