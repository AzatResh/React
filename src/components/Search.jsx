import React from "react";

class Search extends React.Component{

    state = {
        search: '',
    }

    handleKey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search);
        }
    }

    render(){
        return(
            <>
                <input className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        value={this.state.search}
                        onChange={(e) => {this.setState({search: e.target.value})}}
                        onKeyDown={this.handleKey}
                        aria-label="Search" />
                <button className="btn btn-outline-success" type="submit" onClick={()=>{this.props.searchMovies(this.state.search)}}>Search</button>
            </>
        );
    }
}
export {Search};