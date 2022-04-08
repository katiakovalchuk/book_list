import React from "react";
import Book from "./Book";

const BookList = ({bookList, onReadBook, onRemoveBook}) => {

    return (
        <ul>
            {bookList.length ? (
                bookList.map((book, idx) => {
                    return (
                        <Book
                            key={book.id}
                            book={book}
                            idx={idx + 1}
                            onReadBook={onReadBook}
                            onRemoveBook={onRemoveBook}
                        />
                    )
                })
            ) : (
                <h1>No books in book list</h1>
            )}
        </ul>
    )
}

export default BookList;
