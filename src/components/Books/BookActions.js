import { BOOK_ADD, BOOK_FETCH_REQUEST, BOOK_FETCH_SUCCESS } from './BookActionTypes';
import axios from 'axios';

export const fetchBooksRequest = () => {
    return {
        type: BOOK_FETCH_REQUEST
    }
};

export const fetchBooksSuccess = (books) => {

    console.log('fetchBooksSuccess() response.data books....',books);

    return {
        type: BOOK_FETCH_SUCCESS,
        payload: books
    }
};

export const fetchBooksFailure = (error) => {
    return {
        type: BOOK_FETCH_SUCCESS,
        payload: error
    }
};



export const addBook = (book) => {
    return {
        type: BOOK_ADD,
        payload: book
    }
}

export const fetchBooks = () => {

    console.log('fetchBooks callled....');

    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(response => {
            const books = response.data
            console.log('fetchBooks response.data books....',books);
            dispatch(fetchBooksSuccess(books))
        })
        .catch(error=>{
            const msg = error.message
            dispatch(fetchBooksFailure(msg))
        })
    }
};


// export const fetchBookDetails = (id) => {
//     return (dispatch)=>{
//         axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then(response => {
//             const users = response.data
//             dispatch(fetchBooksSuccess(users))
//         })
//         .catch(error=>{
//             const msg = error.message
//             dispatch(fetchBooksFailure(msg))
//         })
//     }
// };