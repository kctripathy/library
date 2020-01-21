import  {BOOK_ADD, BOOK_FETCH_SUCCESS, BOOK_FETCH_FAILURE } from './BookActionTypes';

const initialState = {
    loading: true,
    books: [],
    error: ''
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOK_FETCH_SUCCESS:

            console.log("action.payload=",action.payload);
            return {
                ...state,
                books: action.payload,
                error: ''
            }

        case BOOK_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
            
        case BOOK_ADD:
            const books = [...state.books, action.payload]
            return { ...state, books };

        default:
            return state;
    }
};

export default bookReducer;
