import './MainPage.css';
import { Card } from '../Card/Card';
import { CardData } from '../Data/CardData';
import { BookDetails } from '../BookDetails/BookDetails';

export const MainPage = (props) => {
    console.log(props);
    return <div className='container-fluid'>
        {props?.page == 'Book' && <Card cardData={CardData} />}
        {props?.page == 'Details' && <BookDetails/>}
    </div>
}