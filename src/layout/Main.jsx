import React from "react"
import {Movies} from '../components/Movies';
import { Preloader } from "../components/Preloader";

class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            movies: [],
        }
    }

    componentDidMount(){

        
        fetch('http://www.omdbapi.com/?apikey=78584b3c&s=batman')
        .then(resp => resp)
        .then(resp => resp.json())
        .then(data => {
           this.setState({movies: data.Search});
        });
    }

    render(){
        const {movies} = this.state;
        
        return(

            <main>
                {
                movies?.length ? 
                    (<Movies movies = {movies}/>)
                    : ( <Preloader/> )
                }
    
            </main>
        );
    }
    
}
export {Main};