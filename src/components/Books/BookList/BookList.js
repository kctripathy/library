import React, { useEffect } from 'react';

import PageTitle from '../../Commons/PageTitle/PageTitle';
import { fetchBooks, fetchBooksRequest } from '../BookActions';
import { connect } from 'react-redux';

const BookList = (props) => {
    useEffect(() => {
        props.fetchBooks();
        console.log("props=", props);
    }, []);

    console.log("props.books ========", props.books);

    return (
        <div>
            <PageTitle title="List of Books" />
            {
                <ul>
                    {
                        props.books.map((book) => <li key={book.id}>{book.name}</li>)
                    }
                </ul>
            }
        </div>
    );
}


const stateAsProps = (state) => {
    return {
        books: state.bookReducer.books
    }
};

const dispatchAsProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(fetchBooks())
    }
}
export default connect(stateAsProps, dispatchAsProps)(BookList);