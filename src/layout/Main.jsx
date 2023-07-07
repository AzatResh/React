import React from "react"

import {Movies} from '../components/Movies';
import { Preloader } from "../components/Preloader";
import {Header} from './Header';
import { Search } from "../components/Search";

class Main extends React.Component{

    state = {
            movies: [],
        }
    

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=78584b3c&s=batman')
        .then(resp => resp.json())
        .then(data => {
           this.setState({movies: data.Search});
        });
    }

    searchMovies = (str) => {
        fetch('http://www.omdbapi.com/?apikey=78584b3c&s='+str)
        .then(resp => resp.json())
        .then(data => {
           this.setState({movies: data.Search});
        });
    }

    render(){
        const {movies} = this.state;
        
        return(
            <>
                <Search searchMovies = {this.searchMovies} />
                <main>
                    {
                    movies?.length ? 
                        (<Movies movies = {movies}/>)
                        : ( <Preloader/> )
                    }
        
                </main>
            </>
        );
    }
    
}
export {Main};