import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, {useState, useEffect} from 'react';

import {Header} from './layout/Header';
import {Search} from './components/Search';
import {Movies} from './components/Movies';
import {Preloader} from './components/Preloader';
import { event } from 'jquery';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
      .then(resp => resp.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      }).
      catch((error)=>{
        console.log(error);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);

    if(str == '') str = 'Matrix';

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
        }`
      )
      .then(resp => resp.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      }).
      catch((error)=>{
        console.log(error);
        setLoading(false);
      });
  }

  return(
    <>
      <Header />
      <main>
      <Search searchMovies = {searchMovies} />

          {
          !loading ? 
              (<Movies movies = {movies}/>)
              : ( <Preloader/> )
          }

      </main>
    </>
  );
  
}

export default App;
