import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';

import {Header} from './layout/Header';
import {Search} from './components/Search';
import {Movies} from './components/Movies';
import {Preloader} from './components/Preloader';
import { event } from 'jquery';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component{

  state = {
    movies: [],
    loading: true
  }


  componentDidMount(){
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({movies: data.Search, loading: false});
      });
  }

  searchMovies = (str, type = 'all') => {
    this.setState({loading: true})

    if(str == '') str = 'Matrix';

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
        }`
      )
      .then(resp => resp.json())
      .then(data => {
        this.setState({movies: data.Search, loading: false});
      });
  }

  render(){
    const {movies, loading} = this.state;

    return(
        <>
            <Header />
            <main>
            <Search searchMovies = {this.searchMovies} />

                {
                !loading ? 
                    (<Movies movies = {movies}/>)
                    : ( <Preloader/> )
                }

            </main>
        </>
    );
  }
}

export default App;
