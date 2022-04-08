import React from "react";

const StatisticsBoard = ({
                             all,
                             readBooks,
                             notReadBooks,
                             onRemoveAll
                         }) => {
    return (
        <div className='board'>
            <div className='board-info'>
                <span>All: {all}</span>
                <span className='text-red'>Read: {readBooks}</span>
                <span className='text-green'>Not read: {notReadBooks}</span>
            </div>
            <button className='button bg-red' type='submit' onClick={onRemoveAll}>Remove all</button>
        </div>
    )
}

export default StatisticsBoard;
