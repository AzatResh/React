function Header(){
    return(
        <div>
            <nav className="header">
                <div className="header__container">
                    <a className="header__brand nav-link active" href="#">Movies</a>
                    <form className="header__form" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </div>
    );
}
export {Header};