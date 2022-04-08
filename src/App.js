import React, {useState} from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import StatisticsBoard from './components/StatisticsBoard';
import BOOK_LIST from "./store/books.json";

const App = () => {

    const [bookList, setBookList] = useState(BOOK_LIST);

    const onReadBook = id => {
        setBookList(prev => prev.map(book => {
            if (book.id === id) {
                book = {...book, isRead: !book.isRead};
            }
            return book;
        }));
    }

    const onAddBook = book => {
        setBookList(prev => [...prev, {...book, id: bookList.length + 1}]);
    }

    const statisticsData = {
        all: bookList.length,
        readBooks: bookList.filter(book => book.isRead).length,
        notReadBooks: bookList.filter(book => !book.isRead).length
    }

    const removeBook = id => {
        setBookList(prev => {
            return prev.filter(book => book.id !== id);
        })
    }

    return (
        <div className='wrapper'>
            <AddBook onAddBook={onAddBook}/>
            <StatisticsBoard
                {...statisticsData}
                onRemoveAll={() => setBookList([])}
            />
            <BookList
                bookList={bookList}
                onReadBook={onReadBook}
                onRemoveBook={removeBook}
            />
        </div>
    )
}

export default App;
