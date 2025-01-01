import React from 'react';
import { BookContext } from '../../types';
import { useOutletContext } from 'react-router-dom';
import Library from './../Library';

const LibraryPage: React.FC = () => {
    const { books ,authenticatedUser }: BookContext = useOutletContext();

    if(!authenticatedUser){ 
        return(
            <div>
                <p>please login to see the library</p>
            </div>
        );
    }
    return (
        <div>
            <h2>Library</h2>
            <Library books={books}/>
        </div>
    );
};

export default LibraryPage;