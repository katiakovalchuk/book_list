import React, {useState} from "react";

const Book = ({book, idx, onReadBook, onRemoveBook}) => {

    const [description, setDescription] = useState('');

    const showDescription = () => {
        setDescription(() => book.description);
    }
    const hideDescription = () => {
        setDescription(() => '');
    }

    return (
        <li className='list-item-wrapper'>
            <div className='list-item'>
                <span>{idx}</span>
                <span className={`list-item-title ${book.isRead ? 'font-decoration' : ''}`}>{book.title}</span>
                <span>
                <button className='list-item-btn bg-green' onClick={showDescription}>Show description</button>
                <input
                    className='list-item-checkbox'
                    type='checkbox' checked={book.isRead}
                    onChange={() => {
                        onReadBook(book.id)
                    }}
                />
                <span className='pointer' onClick={() => onRemoveBook(book.id)}>&#128465;&#65039;</span>
            </span>
            </div>
            {description ? (
                <div className='description'>
                    <p className='description-text'>{description}</p>
                    <button className='list-item-btn bg-blue' onClick={hideDescription}>Hide description</button>
                </div>
            ) : ''}
        </li>
    )
}

export default Book;
