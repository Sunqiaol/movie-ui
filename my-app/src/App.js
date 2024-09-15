import { useEffect, useState } from 'react';
import './App.css';
import Movieui from './components/movieUI'

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    try {
      const response = await fetch('https://omdbapi.com/?s=starwars&apikey=263d22d8')
      const data = await response.json()
      setMovies(data.Search)
      console.log(data.Search)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
     fetchMovie();
  }, [])

  return (
    <ul>
      {movies.map((movie) => (
        <Movieui title={movie.Title} year={movie.Year} />
      ))}
    </ul>
  );
}

export default App;
