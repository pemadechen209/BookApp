import './TopNav.css';

export const TopNav = (props) => {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <a className="navbar-brand text-center" href="#">{props?.movieBrand}</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {props?.navMenuData.map((navData) => (
                            <li className="nav-item">
                                <a className="nav-link" href="#">{navData}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    </div>
}

 {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}