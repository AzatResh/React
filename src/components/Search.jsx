import React, {useState} from "react";

const Search = (props) => {

    const {
        searchMovies = Function.prototype
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if(event.key === 'Enter'){
            searchMovies(search, type);
        }
    }

    const handleRadio = (event) =>{
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    }

    return(
        <>
            <form className="header__form p-3 pb-0" role="search" onSubmit={(e)=>{e.preventDefault()}}>
                <input className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        value={search}
                        onChange={(e) => {setSearch(e.target.value)}}
                        onKeyDown={handleKey}
                        aria-label="Search" />
                <button className="btn btn-outline-success" type="submit" onClick={()=>{searchMovies(search, type)}}>Search</button>
            </form>

            <div className="p-2 ps-3">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={handleRadio} data-type="all" checked={type === 'all'}/>
                    <label className="form-check-label" for="inlineRadio1">All</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={handleRadio} data-type="movie" checked={type === 'movie'}/>
                    <label className="form-check-label" for="inlineRadio2">Movies</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onChange={handleRadio} data-type="series" checked={type === 'series'}/>
                    <label className="form-check-label" for="inlineRadio3">Series</label>
                </div>
            </div>
        </>
    );
    
}
export {Search};