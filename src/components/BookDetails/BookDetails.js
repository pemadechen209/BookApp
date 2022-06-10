import './BookDetails.css';

export const BookDetails = (props) => {
    console.log(props)
    return <div >
        <h1 className='mt-5 title'>
            {props?.selectedBook?.Title}
        </h1>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 col-lg-4'>
                    <img className='image mt-5' src={props?.selectedBook?.Image} />
                  
                </div>
                <div className='col-sm-12 col-lg-8'>
                    <p className='mt-5 p-3'>
                        {props?.selectedBook?.Description}
                    </p>
                </div>

            </div>
        </div>
    </div>

}