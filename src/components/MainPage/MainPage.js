import './MainPage.css';
import { Card } from '../Card/Card';
import { CardData } from '../Data/CardData';
import { BookDetails } from '../BookDetails/BookDetails';
import { useState } from 'react';
import { TopNav } from '../TopNav/TopNav';
import { navMenuData, movieBrand } from '../Data/NavData';
export const MainPage = () => {
    const [selectedBook, setSelectedBook] = useState();

    function handleSelection(book) {
        setSelectedBook(book)
    }

    return <div className='container-fluid'>
         <TopNav navMenuData={navMenuData} movieBrand={movieBrand}  handleSelection={handleSelection} />
        {!selectedBook && <Card cardData={CardData} handleSelection={handleSelection} />}
        {selectedBook && <BookDetails selectedBook={selectedBook}  handleSelection={handleSelection}/>}
    </div>
}
