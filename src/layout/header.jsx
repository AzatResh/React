import {Search} from '../components/Search';

function Header(props){
    return(
        <div>
            <nav className="header">
                <div className="header__container">
                    <a className="header__brand nav-link active" href="#">Movies</a>
                    <form className="header__form" role="search">
                        {/* <Search searchMovies = {props.searchMovies}/> */}
                    </form>
                </div>
            </nav>

        </div>
    );
}
export {Header};