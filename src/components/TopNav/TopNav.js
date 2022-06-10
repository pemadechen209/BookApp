import './TopNav.css';

export const TopNav = (props) => {
    return <div>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid nav-bar-container">

                <a className="navbar-brand text-center" href="#" onClick={()=>props?.handleSelection(null)}>{props?.movieBrand}</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {props?.navMenuData.map((navData) => (
                            <li className="nav-item" key={navData}>
                                <a className="nav-link" 
                                onClick={()=>props?.handleSelection(null)}
                                >{navData}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    </div>
}

