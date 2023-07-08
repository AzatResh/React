import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';

import {Header} from './layout/Header';
import {Search} from './components/Search';
import {Movies} from './components/Movies';
import {Preloader} from './components/Preloader';
import { event } from 'jquery';

class App extends React.Component{

  state = {
    movies: [],
  }


  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=78584b3c&s=avengers')
      .then(resp => resp.json())
      .then(data => {
        this.setState({movies: data.Search});
      });
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=${str}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({movies: data.Search});
      });
  }

  render(){
    const {movies} = this.state;

    return(
        <>
            <Header />
            <main>
            <Search searchMovies = {this.searchMovies} />

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

export default App;
