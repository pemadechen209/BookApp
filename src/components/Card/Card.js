import './Card.css';
import { MainPage } from '../MainPage/MainPage';
export const Card = (props) => {
    return <div className='row m-3'>
        {props?.cardData.map((card) => (
            <div className='col-lg-4 col-sm-6 mt-3' key={card?.Title}>
                <img className="book" src={card?.Image} alt="Card image cap" 
                onClick={() => props.handleSelection(card)} />
                <h5 className="card-title mt-3">{card?.Title}</h5>
                <p className="card-text">{card?.SubTitle}</p>
                <a className="btn btn-success buttons buttons-white"
                    onClick={() => props.handleSelection(card)}>
                    Get Lost in the Beauty</a>
            </div>
        ))}
    </div>
}
