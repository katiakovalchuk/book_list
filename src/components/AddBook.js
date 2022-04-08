import React, {useState} from "react";

const AddBook = ({onAddBook}) => {
    const [book, setBook] = useState({
        isRead: false,
        title: '',
        description: ''
    });

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (book.title.length) {
                    onAddBook(book);
                    setBook(() => {
                        return {
                            isRead: false,
                            title: '',
                            description: ''
                        }
                    })
                }
            }}>
            <div className='add-book'>
                <input
                    className='add-book-input'
                    type='text'
                    placeholder='Title of book'
                    value={book.title}
                    onChange={e => {
                        setBook(prev => {
                            return {...prev, title: e.target.value}
                        });
                    }}
                />
                <button className='button bg-thistle' type='submit'>Add new book</button>
            </div>
            {
                book.title ? (
                    <input
                        className='add-book-input'
                        type='text'
                        placeholder='Description of book'
                        value={book.description}
                        onChange={e => {
                            setBook(prev => {
                                return {...prev, description: e.target.value}
                            });
                        }}
                    />
                ) : ''
            }
        </form>
    )
}

export default AddBook;
