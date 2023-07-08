import React from "react";

class Search extends React.Component{

    state = {
        search: '',
        type: 'all'
    }

    handleKey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleRadio = (event) =>{
        this.setState(() => ({type: event.target.dataset.type}), 
        ()=>{this.props.searchMovies(this.state.search, this.state.type)})
    }

    render(){
        return(
            <>
                <form className="header__form p-3 pb-0" role="search" onSubmit={(e)=>{e.preventDefault()}}>
                    <input className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            value={this.state.search}
                            onChange={(e) => {this.setState({search: e.target.value})}}
                            onKeyDown={this.handleKey}
                            aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit" onClick={()=>{this.props.searchMovies(this.state.search, this.state.type)}}>Search</button>
                </form>

                <div className="p-2 ps-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={this.handleRadio} data-type="all" checked={this.state.type === 'all'}/>
                        <label className="form-check-label" for="inlineRadio1">All</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={this.handleRadio} data-type="movie" checked={this.state.type === 'movie'}/>
                        <label className="form-check-label" for="inlineRadio2">Movies</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onChange={this.handleRadio} data-type="series" checked={this.state.type === 'series'}/>
                        <label className="form-check-label" for="inlineRadio3">Series</label>
                    </div>
                </div>
            </>
        );
    }
}
export {Search};