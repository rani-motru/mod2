

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// IMPORT OUR COMPONENTS
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'

function App() {
  // create a variable to hold my api key
  const apiKey = "cac123eb";

  // create state to hold the movie data
  const [movie, setMovie] = useState(null);

  //    ===== this part is new  =====
  // create a function that is given the search term then does the fetch request
  //    =====                   =====
  // Function getMovie
  const getMovie = async (searchTerm) => {
    // create a variable that combines the parts of the url into one
    const baseUrl = 'https://www.omdbapi.com/';
    const url = baseUrl + '?' + 'apikey=' + apiKey + '&' + 't=' + searchTerm;
    // make fetch request and store response
    try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  }

    //This will run on the first render but not on subsquent renders
    useEffect(() => {
      const movieArray = ["Clueless", "Mulan", "lilo & stitch", "batman", "air bud"];
      const firstMovie = movieArray[Math.floor(Math.random() * movieArray.length)];
      getMovie(firstMovie);
    }, []);
  
  // pass the function down to the form via props
  // <Form moviesearch={getMovie} />
  // that is passing our getMovie method as props that are called moviesearch in the Form
  return (
    <div className='App'>
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  )
}

export default App