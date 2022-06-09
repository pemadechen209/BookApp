import './Card.css';
import { MainPage } from '../MainPage/MainPage';
export const Card = (props) => {
    return <div className='row m-3'>
        {props?.cardData.map(( card) => (

            <div className='col-4 mt-3'>
                <img className="book" src={card?.Image} alt="Card image cap" />
                <h5 className="card-title mt-3">{card?.Title}</h5>
                <p className="card-text">{card?.SubTitle}</p>
                <a className="btn btn-primary" onClick={() => { console.log('hi'); <MainPage page='Details'/> }}>Get Lost in the Beauty</a>
            </div>
        ))}
    </div>
}

{/* <img className="book" src={card?.Image} alt="Card image cap" />
<div className="">
    <h5 className="card-title mt-3">{card?.Title}</h5>
    <p className="card-text">{card?.SubTitle}</p>
    <a href="#" className="btn btn-primary">Get Lost in the Beauty</a>
</div> */}