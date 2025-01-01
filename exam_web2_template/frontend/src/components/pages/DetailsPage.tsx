import React from 'react';
import { useMatch, useOutletContext } from 'react-router-dom';
import { BookContext } from '../../types';
import BookCard from '../BookCard';

const DetailsPage: React.FC = () => {
    const { books }: BookContext = useOutletContext();
    const match = useMatch("/books/:id");
    const bookId = Number(match?.params.id);  
    const bookFound = books.find((book) => book.id === bookId);
    
    if (!bookFound) return <p>Book not found</p>;

    return (
        <BookCard book={bookFound} />
    );
    
};

export default DetailsPage;